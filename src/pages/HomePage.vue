<template>
  <center>
    <div class="row m-0">
      <div class="col-2">
        <Navbar />
      </div>
      <div class="col-7 justify-content-center">
        <div align="right">
          <button
            class="btn btn-primary text-light"
            data-bs-toggle="modal"
            data.bs.target="PostForm"
            align="right"
          >
            Create Post
            <Modal id="PostForm">
              <template #modal-title> GREETER</template>
              <template #modal-body><PostForm /> </template>
            </Modal>
          </button>
        </div>
        <Search />
        <div v-for="p in posts" :key="p.id">
          <Posts :post="p" />
        </div>
      </div>
      <div class="col-3 mt-5">
        <SubliminalMessage :subMessage="sm" />
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
import { subliminalMessageService } from "../services/SubliminalMessageService";
export default {
  setup() {
    onMounted(async () => {
      try {
        await postsService.getAll();
        await subliminalMessageService.getAll();
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "This is an error!");
      }
    });
    return {
      posts: computed(() => AppState.posts),
      sm: computed(() => AppState.subMessage),
      name: "Home",
    };
  },
};
</script>

<style scoped lang="scss">
</style>
