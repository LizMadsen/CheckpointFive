<template>
  <div class="row m-0 d-flex">
    <div class="col-3 bg-primary vh-100">//INSERT PROFILE STUFF HERE</div>
    <div class="col-8 about text-center">
      <h1>Welcome {{ account.name }}</h1>
      <img class="rounded" :src="account.picture" alt="" />
      <p>{{ account.email }}</p>
    </div>
    <div class="col-1">
      <router-link :to="{ name: 'Home' }">
        <button class="m-3 text-light bg-primary rounded">Home</button>
      </router-link>
      <!-- <SubliminalMessage /> -->
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
export default {
  name: "Account",
  setup() {
    return {
      account: computed(() => AppState.account),
    };
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
