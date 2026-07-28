import { ref } from 'vue';

/**
 * Composable for force re-rendering components
 * Useful for demo components that need to restart animations or reset state
 */
export function useForceRerender() {
  const rerenderKey = ref(0);

  const forceRerender = () => {
    rerenderKey.value++;
  };

  return {
    rerenderKey,
    forceRerender
  };
}
