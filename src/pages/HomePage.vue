<template>
  <div>
    <button
      class="btn btn-primary"
      data-bs-toggle="modal"
      data.bs.target="PostForm"
    ></button>
    <Modal id="PostForm">
      <template #modal-title> GREETER</template>
      <template #modal-body><BlogForm /> </template>
    </Modal>
  </div>
  <div>
    <Search />
  </div>
  <center>
    <div
      class="
        row
        home
        flex-grow-1
        d-flex
        flex-column
        align-items-center
        m-0
        container-fluid
        pt-4
      "
    >
      <div v-for="p in post" :key="p.id">
        <Blog :post="p" />
      </div>
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
    };
  },
};
</script>

<style scoped lang="scss">
</style>
