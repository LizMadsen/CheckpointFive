<template>
  <div class="col-8 card">
    <div class="card-body rounded elevation-2">
      <p>
        {{ post.title }}
      </p>
      <p>
        {{ post.body }}
      </p>
      <p>
        <img class="imgFit" :src="post.imgUrl" alt="Blog post picture" />
      </p>
    </div>
  </div>
</template>


<script>
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  props: { post: { type: Object, required: true } },
  setup() {
    return {
      async getAll() {
        try {
          await postsService.getAll();
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "Error!");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
// .imgFit {
//   height: cover;
// }
</style>