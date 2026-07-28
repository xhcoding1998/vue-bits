<script setup lang="ts">
import SiteBrand from '@/components/common/SiteBrand.vue';
import './LandingLoader.css';

type Props = {
  hiding?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  hiding: false
});
</script>

<template>
  <div :class="['ln-loader', props.hiding ? 'ln-loader--hide' : '']">
    <span class="ln-loader-logo" aria-hidden="true"><SiteBrand /></span>
  </div>
</template>
