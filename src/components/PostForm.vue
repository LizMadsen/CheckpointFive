<template>
  <Modal id="post-modal">
    <template #modal-title>
      <h4>Make A New Post</h4>
    </template>
    <template #modal-body>
      <form @submit.prevent="handleSubmit">
        <div class="justify-content-around">
          <div>
            <label for="body" class="form-label"> Body</label>
            <textarea
              type="text"
              class="form-control"
              name="body"
              id="body"
              placeholder="Body"
              min="10"
              max="5000"
              required
              v-model="post.body"
            >
            </textarea>
          </div>
          <div>
            <label for="image" class="form-label"> Image URL</label>
            <input
              type="text"
              class="form-control"
              name="image"
              id="image"
              placeholder="Image"
              required
              v-model="post.imgUrl"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary text-light"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="submit" class="btn btn-success">Submit</button>
        </div>
      </form>
    </template>
  </Modal>
</template>


<script>
import { ref } from "@vue/reactivity";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { useRouter } from "vue-router";
import { watchEffect } from "@vue/runtime-core";
import { Modal } from "bootstrap";
import { NewPost } from "../Models/NewPost";

export default {
  // props: {
  //   newPost: {
  //     default: () => new NewPost(),
  //   },
  // },
  setup() {
    const router = useRouter();
    const post = ref({});

    // watchEffect(() => {
    //   editable.value = { ...props.newPost };
    // });
    return {
      post,
      async handleSubmit() {
        try {
          logger.log(post.value);
          await postsService.create(post.value);
          Modal.getOrCreateInstance(
            document.getElementById("post-modal")
          ).show();
          router.push({
            name: "Home",
          });
        } catch (error) {
          logger.error(error);
          Pop.toast("Failed to Create", "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>