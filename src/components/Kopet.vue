<!-- @format -->

<template>
  kvt: {{ koved }}<br />
  obj: {{ obj }}<br />
  <div>kpt: {{ count }} - {{ evenOrOdd }}</div>

  <button @click="incrementAsync">
    Increment async
  </button>
  {{ sempak }}
</template>
<script>
import { computed, onMounted, onUpdated, ref, reactive } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const obj = reactive({ count: 0 });
    const store = useStore();
    const koved = ref('silid');

    onUpdated(() => {
      console.log('updated!');
    });
    onMounted(() => {
      console.log('component is mounted!');

      store.dispatch('goset').then(() => {
        require('consola').info('gosok');
      });
    });

    return {
      obj,
      koved,
      count: computed(() => store.state.count),
      evenOrOdd: computed(() => store.getters.evenOrOdd),
      incrementAsync: () => {
        // store.commit('goSempak', 'warna warni');
        koved.value = 'jancuk';

        store.dispatch('incrementAsync').then(() => {
          require('consola').info('makcrot');
        });
        obj.count = 1213;
      },
      sempak: computed(() => store.state.sempak),
    };
  },
};
</script>
