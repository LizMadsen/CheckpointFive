<template>
  <Modal id="PostForm">
    <template #modal-title class="bg-primary">
      <h4>Make A New Post</h4>
    </template>
    <template #modal-body>
      <form @submit.prevent="handleSubmit">
        <div class="d-flex justify-content-between">
          <div>
            <label for="title" class="form-label"> Title</label>
            <input
              type="text"
              class="form-control"
              name="title"
              id="title"
              aria-describedby="title"
              placeholder="Title"
              required
              v-model="editable.title"
            />
          </div>
          <div>
            <label for="body" class="form-label"> Body</label>
            <textarea
              type="text"
              class="form-control"
              name="body"
              id="body"
              aria-describedby="body"
              placeholder="Body"
              min="10"
              max="5000"
              required
              v-model="editable.body"
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
              aria-describedby="image"
              placeholder="Image"
              required
              v-model="editable.image"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-info" data-bs-dismiss="modal">
            Close
          </button>
          <button type="submit" class="btn btn primary">Submit</button>
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
  props: {
    newPost: {
      default: () => new NewPost(),
    },
  },
  setup(props) {
    const router = useRouter();
    const editable = ref({});

    watchEffect(() => {
      editable.value = { ...props.newPost };
    });
    return {
      editable,
      async handleSubmit() {
        try {
          if (editable.value.id) {
            await postsService.edit(editable.value);
          } else {
            await postsService.create(editable.value);
          }
          // if successful close modal
          Modal.getOrCreateInstance(document.getElementById("PostForm")).hide();
          router.push({
            name: "Home",
          });
          // change route to car details for this new car
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