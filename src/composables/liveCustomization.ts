import type { ComputedRef, InjectionKey, Ref } from 'vue';
import { inject, watch } from 'vue';

export type LiveControlValue = string | number | boolean;

export type LiveParameter = {
  label: string;
  propName: string;
  value: LiveControlValue | LiveControlValue[];
};

export type LiveCustomizationContext = {
  registerControl: (label: string, value: LiveControlValue) => void;
  currentUsage: ComputedRef<string>;
  currentParameters: ComputedRef<LiveParameter[]>;
};

export const LIVE_CUSTOMIZATION_KEY: InjectionKey<LiveCustomizationContext> = Symbol('live-customization');

export function registerLiveControl<T extends LiveControlValue>(title: () => string, modelValue: Ref<T>) {
  const context = inject(LIVE_CUSTOMIZATION_KEY, null);

  watch(
    [title, modelValue],
    ([label, value]) => {
      if (label) context?.registerControl(label, value);
    },
    { immediate: true }
  );
}
