<template>
  <!-- <center> -->
  <div>
    <p>
      {{ posts.creator.picture }}
    </p>
    <p>
      {{ posts.title }}
    </p>
    <p>
      {{ posts.body }}
    </p>
    <p>
      <img class="imgFit" :src="post.imgUrl" alt="post picture" />
    </p>
  </div>
  <!-- </center> -->
</template>


<script>
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  name: "Home",
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