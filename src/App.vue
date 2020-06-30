<!-- @format -->

<template>
  <!-- <button @click="inc">Clicked {{ count }} times.</button>-->
  <Kopet />
</template>

<script>
// import { ref } from 'vue';
import Kopet from './components/Kopet.vue';
export default {
  components: {
    Kopet,
  },
  /*
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    return {
      count,
      inc,
    };
  },
  */
};
</script>
