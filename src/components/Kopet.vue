<!-- @format -->

<template>
  <div>kpt: {{ count }} - {{ evenOrOdd }}</div>

  <button @click="increment">+</button>

  <button @click="decrement">-</button>
  <button @click="incrementIfOdd">Increment if odd</button>
  <button @click="incrementAsync">Increment async</button>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();

    return {
      count: computed(() => store.state.count),
      evenOrOdd: computed(() => store.getters.evenOrOdd),
      increment: () => store.dispatch('increment'),
      decrement: () => store.dispatch('decrement'),
      incrementIfOdd: () => store.dispatch('incrementIfOdd'),
      incrementAsync: () => store.dispatch('incrementAsync'),
    };
  },
};
</script>
