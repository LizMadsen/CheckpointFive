<template>
  <div class="row m-0 d-flex">
    <div class="col-2">
      <Navbar />
    </div>
    <div class="col-8 about text-center">
      <div class="coverImg">
        <h1>Welcome {{ account.name }}</h1>
        <img class="rounded" :src="account.picture" alt="" />
        <p>{{ account.email }}</p>
        <p>UPDATE ACCOUNT INFORMATION HERE</p>
      </div>
      <div class="card">
        <div class="card-body">
          <h4>Make A New Post</h4>
          <input
            class="form-control mt-3"
            placeholder="Post Title"
            type="text"
          />
          <textarea
            class="form-control mt-3"
            placeholder="Post Body"
            type="text"
          />
        </div>
      </div>
    </div>
    <div class="col-1">
      <router-link :to="{ name: 'Home' }">
        <button class="m-3 text-light bg-primary rounded">Home</button>
      </router-link>
    </div>
  </div>
  <div class="row m-0">
    <SubMessBanner :subMessage="smb" class="my-3" />
  </div>
</template>


<script>
import { accountService } from "../services/AccountService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { subliminalMessageService } from "../services/SubliminalMessageService";
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