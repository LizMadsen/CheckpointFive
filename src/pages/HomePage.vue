<template>
  <center>
    <div v-for="p in post" :key="p.id">
      <Posts :posts="p" />
    </div>
  </center>
</template>

<script>
import { computed, onMounted } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
import { postsService } from "../services/PostsService";
export default {
  setup() {
    onMounted(async () => {
      try {
        await postsService.getAll();
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "This is an error!");
      }
    });
    return {
      posts: computed(() => AppState.posts),
      name: "Home",
    };
  },
};
</script>

<style scoped lang="scss">
</style>
