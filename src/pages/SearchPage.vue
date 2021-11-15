<template>
  <div class="searchPage container-fluid">
    <div class="row m-0">
      <div class="col-2">
        <Navbar />
      </div>
      <div class="col-8">
        <Search />
      </div>
    </div>
    <div class="col-6" v-for="p in posts" :key="p.id">
      <Posts :post="p" />
    </div>
  </div>
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