<template>
  <form @submit.prevent="create()">
    <!-- <input
      type="text"
      name="post-title"
      placeholder="Title"
      required
      v-model="posts.title"
    /> -->
    <textarea
      name="post-body"
      cols="30"
      rows="10"
      min="10"
      required
      placeholder="Post"
      v-model="posts.body"
    >
    </textarea>
    <label for="imgUrl" class="form-label"> Image URL</label>
    <input
      type="url"
      name="imgUrl"
      placeholder="Image URL Here"
      required
      v-model="posts.imgUrl"
    />
  </form>
</template>


<script>
import { ref } from "@vue/reactivity";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  setup() {
    const posts = ref({});
    return {
      posts,
      async create() {
        try {
          await postsService.create(posts.value);
        } catch (error) {
          logger.log(error);
          Pop.toast(error.message, "Error!");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>