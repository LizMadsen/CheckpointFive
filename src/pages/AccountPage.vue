<template>
  <Account :account="account" />
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { accountService } from "../services/AccountService";
import { subliminalMessageService } from "../services/SubliminalMessageService";
export default {
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
