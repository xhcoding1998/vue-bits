<template>
  <div class="scrubber">
    <div class="scrubber-track scrubber-track--input" :data-disabled="isDisabled">
      <span class="scrubber-label">{{ displayTitle }}</span>
      <input
        class="scrubber-input"
        type="text"
        :value="modelValue"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled="isDisabled"
        :aria-label="displayTitle"
        @input="modelValue = ($event.target as HTMLInputElement).value"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { translateControlLabel } from '@/i18n';
import { registerLiveControl } from '@/composables/liveCustomization';

const {
  title = '',
  placeholder = '',
  maxlength,
  isDisabled = false
} = defineProps<{
  title?: string;
  placeholder?: string;
  maxlength?: number;
  isDisabled?: boolean;
}>();

const modelValue = defineModel<string>({ default: '' });
registerLiveControl(() => title, modelValue);
const displayTitle = computed(() => translateControlLabel(title));
</script>
