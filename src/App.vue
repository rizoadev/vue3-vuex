<!-- @format -->

<template>
  <h1>Hello Vue 3!</h1>
  <button @click="inc">Clicked {{ count }} times.</button>
  <br />
  <br />
  <br />
  <Kopet />
</template>

<script>
import { ref } from 'vue';
import Kopet from './components/Kopet.vue';
export default {
  components: {
    Kopet,
  },
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
};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
