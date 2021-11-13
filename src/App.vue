<template>
  <main>
    <div class="row m-0">
      <div class="col-2">
        <Navbar />
      </div>
      <div class="col-8 mt-5">
        <Posts />
      </div>
    </div>
  </main>
  <router-view />
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
