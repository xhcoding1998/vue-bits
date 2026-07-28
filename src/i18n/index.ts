import { ref } from 'vue';
import {
  messages as zhCNMessages,
  translateControlLabel as translateControlLabelZhCN,
  translatePropDescription as translatePropDescriptionZhCN
} from './zh-CN';

export type AppLocale = 'zh-CN';

export const DEFAULT_LOCALE: AppLocale = 'zh-CN';
export const currentLocale = ref<AppLocale>(DEFAULT_LOCALE);
export const supportedLocales = [{ value: 'zh-CN' as const, label: '简体中文' }];

// 中文是当前默认语言。后续新增语言时，在这里注册新的 messages 和翻译策略即可。
export const messages = zhCNMessages;

export function translateControlLabel(label = '') {
  return currentLocale.value === 'zh-CN' ? translateControlLabelZhCN(label) : label;
}

export function translatePropDescription(name: string, description = '') {
  return currentLocale.value === 'zh-CN'
    ? translatePropDescriptionZhCN(name, description)
    : description;
}

export function setLocale(nextLocale: AppLocale) {
  currentLocale.value = nextLocale;
  document.documentElement.lang = nextLocale;
}

