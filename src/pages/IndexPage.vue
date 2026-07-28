<template>
  <div>
    <title>动效工坊｜全部组件</title>
    <ComponentList :list="componentMetadata" title="全部组件" sorting="alphabetical" has-favorite-button />
  </div>
</template>

<script setup lang="ts">
import ComponentList from '@/components/common/ComponentList.vue';
import { componentMetadata } from '@/constants/Information';
</script>
