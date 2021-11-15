<template>
  <center>
    <div class="row container-fluid d-flex">
      <div class="col-3">
        <Navbar />
      </div>
      <div class="col-7">
        <Search />
      </div>
      <div class="col-2">
        <button class="m-3 text-light bg-primary rounded">Home</button>
      </div>
    </div>
    <div class="row">
      <div v-for="p in posts" :key="p.id">
        <Posts :post="p" />
      </div>
    </div>
  </center>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  setup() {
    return {
      posts: computed(() => {
        const posts = AppState.results;
      }),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>