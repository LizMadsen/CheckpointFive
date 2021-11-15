<template>
  <div class="card elevation-2 my-3">
    <div class="card-body">
      <p>
        <img
          class="profilePic mx-2"
          :src="post.creator.picture"
          alt="post picture"
          align="left"
        />
      </p>
      <div align="left">
        {{ post.creator.name }}<br />{{ post.creator.createdAt }}
      </div>
      <p>
        {{ post.body }}
      </p>
      <p>
        <img class="imgFit" :src="post.imgUrl" alt="post picture" />
      </p>
      <p>
        <i class="mdi mdi-heart-multiple-outline">{{ post.likes.length }}</i>
      </p>
    </div>
  </div>
</template>


<script>
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  name: "Home",
  props: { post: { type: Object, required: true } },

  computed: {
    hasImg() {
      return post.HasOwnProperty("imgUrl");
    },
  },

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
.profilePic {
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  object-fit: cover;
}

.imgFit {
  width: 25rem;
}
// .card {
//   width: auto;
// }
</style>