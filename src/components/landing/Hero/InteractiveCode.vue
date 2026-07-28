<script setup lang="ts">
import EditableValue from './EditableValue.vue';

export type PropDef = {
  name: string;
  type: 'color' | 'number' | 'boolean';
  default: string | number | boolean;
  min?: number;
  max?: number;
  step?: number;
};

export type SnippetDef = {
  label: string;
  component: string;
  props: PropDef[];
};

type CodeSnippetDef = Omit<SnippetDef, 'label'>;

defineProps<{
  def: CodeSnippetDef;
  values: Record<string, string | number | boolean>;
}>();

const emit = defineEmits<{
  (
    e: 'change',
    payload: {
      name: string;
      value: string | number | boolean;
    }
  ): void;
}>();

const toKebab = (value: string) => value.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
</script>

<template>
  <pre class="ln-hero-code-pre"><code><span class="c-punc">&lt;</span><span class="c-kw">script setup</span><span class="c-attr"> lang</span><span class="c-punc">=</span><span class="c-str">"ts"</span><span class="c-punc">&gt;</span>
<span class="c-kw">import</span><span class="c-comp"> {{ def.component }}</span><span class="c-kw"> from</span><span class="c-str"> '@/components/{{ def.component }}.vue'</span>
<span class="c-punc">&lt;/</span><span class="c-kw">script</span><span class="c-punc">&gt;</span>

<span class="c-punc">&lt;</span><span class="c-kw">template</span><span class="c-punc">&gt;</span>
  <span class="c-comp">&lt;{{ def.component }}</span><template v-for="prop in def.props" :key="prop.name">
    <span class="c-attr"> :{{ toKebab(prop.name) }}</span><span class="c-punc">=</span><span class="c-str">"</span><EditableValue
      :type="prop.type"
      :value="values[prop.name]"
      :onChange="value => emit('change', { name: prop.name, value })"
      :min="prop.min"
      :max="prop.max"
      :step="prop.step"
    /><span class="c-str">"</span></template>
  <span class="c-comp">/&gt;</span>
<span class="c-punc">&lt;/</span><span class="c-kw">template</span><span class="c-punc">&gt;</span></code></pre>
</template>
