<template>
  <div class="dependencies-container">
    <h2 class="demo-title">Dependencies</h2>

    <div class="demo-details">
      <span v-for="dep in dependencyList" :key="dep" class="dependency-tag">{{ dep }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  dependencyList: string[];
}

defineProps<Props>();
</script>
