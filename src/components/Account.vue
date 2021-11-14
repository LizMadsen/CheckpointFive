<template>
  <div class="row m-0 d-flex">
    <div class="col-3 bg-primary vh-100">
      <!-- <img
        class="profilePic"
        :src="account.coverImg.default"
        alt="Profile Pic"
      /> -->
    </div>
    <div class="col-8 about text-center">
      <h1>Welcome {{ account.name }}</h1>
      <img class="rounded" :src="account.picture" alt="" />
      <p>{{ account.email }}</p>
      <p>UPDATE ACCOUNT INFORMATION HERE</p>
    </div>
    <div class="col-1">
      <router-link :to="{ name: 'Home' }">
        <button class="m-3 text-light bg-primary rounded">Home</button>
      </router-link>
    </div>
  </div>
</template>


<script>
import { accountService } from "../services/AccountService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  name: "Account",
  props: { account: { type: Object, required: true } },
  setup() {
    return {
      async getAccount() {
        try {
          await accountService.getAccount();
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "Error in the account service");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>