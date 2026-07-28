<template>
  <div class="scrubber">
    <button
      type="button"
      class="scrubber-track scrubber-track--switch"
      role="switch"
      :aria-checked="modelValue"
      :aria-label="displayTitle"
      :aria-disabled="isDisabled"
      :data-disabled="isDisabled"
      :data-checked="modelValue"
      :tabindex="isDisabled ? -1 : 0"
      @click="toggle"
      @keydown="onKeyDown"
    >
      <span class="scrubber-label">{{ displayTitle }}</span>
      <span class="scrubber-switch-toggle">
        <span class="scrubber-switch-knob" />
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { translateControlLabel } from '@/i18n';
import { registerLiveControl } from '@/composables/liveCustomization';

const props = withDefaults(
  defineProps<{
    title?: string;
    isDisabled?: boolean;
  }>(),
  { title: '', isDisabled: false }
);

const modelValue = defineModel<boolean>({ default: false });
registerLiveControl(() => props.title, modelValue);
const displayTitle = computed(() => translateControlLabel(props.title));

function toggle() {
  if (props.isDisabled) return;
  modelValue.value = !modelValue.value;
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    toggle();
  }
}
</script>
