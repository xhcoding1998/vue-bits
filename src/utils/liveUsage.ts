import type { LiveControlValue, LiveParameter } from '@/composables/liveCustomization';

type PropDefinition = {
  name: string;
  type: string;
};

type RegisteredControl = {
  label: string;
  value: LiveControlValue;
};

const WORD_ALIASES: Record<string, string> = {
  amplitude: 'amp',
  amount: 'count',
  enabled: 'enable',
  interaction: 'mouse',
  number: 'count',
  pixelation: 'pixel',
  show: 'display',
  speed: 'time'
};

const splitWords = (value: string) =>
  value
    .replace(/\([^)]*\)/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[^a-z0-9]+/gi, ' ')
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map(word => WORD_ALIASES[word] ?? word)
    .filter(word => !['is', 'use', 'with'].includes(word));

const normalizedName = (value: string) => splitWords(value).join('');

const kebabCase = (value: string) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();

const propScore = (label: string, propName: string) => {
  const labelWords = new Set(splitWords(label));
  const propWords = new Set(splitWords(propName));
  const labelNormalized = [...labelWords].join('');
  const propNormalized = [...propWords].join('');

  if (labelNormalized === propNormalized) return 100;
  if (labelNormalized.includes(propNormalized) || propNormalized.includes(labelNormalized)) return 80;

  const overlap = [...labelWords].filter(word => propWords.has(word)).length;
  if (overlap === 0) return 0;

  return (overlap / Math.max(labelWords.size, propWords.size)) * 60;
};

const findUsageAttributes = (usage: string) => {
  const componentTag = usage.match(/<[A-Z][\w.-]*\b[\s\S]*?\/?>/)?.[0] ?? '';
  return [...componentTag.matchAll(/\s(?::|v-bind:)?([a-z][\w-]*)\s*=/g)].map(match => match[1]);
};

const chooseProp = (label: string, propsTable: PropDefinition[], usageAttributes: string[]) => {
  const candidates = new Map<string, PropDefinition>();

  propsTable.forEach(prop => candidates.set(prop.name, prop));
  usageAttributes.forEach(attribute => {
    const match = propsTable.find(prop => normalizedName(prop.name) === normalizedName(attribute));
    candidates.set(match?.name ?? attribute, match ?? { name: attribute, type: '' });
  });

  let best: { prop: PropDefinition; score: number } | null = null;
  for (const prop of candidates.values()) {
    const score = propScore(label, prop.name);
    if (!best || score > best.score) best = { prop, score };
  }

  return best && best.score >= 28 ? best.prop : null;
};

const formatValue = (value: LiveControlValue | LiveControlValue[]) => {
  if (Array.isArray(value)) {
    return `[${value
      .map(item => (typeof item === 'string' ? `'${item.replace(/'/g, "\\'")}'` : String(item)))
      .join(', ')}]`;
  }

  if (typeof value === 'string') return `'${value.replace(/'/g, "\\'")}'`;
  return String(value);
};

const replaceOrInsertAttribute = (usage: string, propName: string, value: LiveControlValue | LiveControlValue[]) => {
  const attribute = kebabCase(propName);
  const escapedAttribute = attribute.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const existing = new RegExp(`\\s(?::|v-bind:)?${escapedAttribute}\\s*=\\s*(?:"[^"]*"|'[^']*')`);
  const isPlainString = typeof value === 'string' && !Array.isArray(value);
  const replacement = isPlainString
    ? ` ${attribute}="${value.replace(/"/g, '&quot;')}"`
    : ` :${attribute}="${formatValue(value).replace(/"/g, '&quot;')}"`;

  if (existing.test(usage)) return usage.replace(existing, replacement);

  return usage.replace(/(<[A-Z][\w.-]*\b[\s\S]*?)(\s*\/?>)/, `$1\n    ${replacement.trim()}$2`);
};

export function buildLiveUsage(
  usage: string,
  propsTable: PropDefinition[],
  controls: RegisteredControl[]
): { usage: string; parameters: LiveParameter[] } {
  if (!usage || controls.length === 0) return { usage, parameters: [] };

  const usageAttributes = findUsageAttributes(usage);
  const grouped = new Map<string, { prop: PropDefinition; controls: RegisteredControl[] }>();

  controls.forEach(control => {
    const prop = chooseProp(control.label, propsTable, usageAttributes);
    if (!prop) return;

    const current = grouped.get(prop.name);
    if (current) current.controls.push(control);
    else grouped.set(prop.name, { prop, controls: [control] });
  });

  let nextUsage = usage;
  const parameters: LiveParameter[] = [];

  grouped.forEach(({ prop, controls: matchingControls }) => {
    const sortedControls = [...matchingControls].sort((a, b) =>
      a.label.localeCompare(b.label, undefined, { numeric: true })
    );
    const value =
      sortedControls.length > 1 && /(?:\[\]|\bArray\b|\btuple\b|^\s*\[)/i.test(prop.type)
        ? sortedControls.map(control => control.value)
        : sortedControls[sortedControls.length - 1].value;

    nextUsage = replaceOrInsertAttribute(nextUsage, prop.name, value);
    parameters.push({
      label: sortedControls.map(control => control.label).join(' / '),
      propName: prop.name,
      value
    });
  });

  return { usage: nextUsage, parameters };
}
