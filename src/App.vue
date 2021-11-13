<template>
  <main>
    <div class="row m-0 d-flex">
      <div class="col-2">
        <Navbar />
      </div>
      <div class="col-10 mt-2">
        <div class="justify-items-right me-3" align="right">
          <button
            class="btn btn-primary text-light"
            data-bs-toggle="modal"
            data.bs.target="PostForm"
          >
            Create Post
            <Modal id="PostForm">
              <template #modal-title> GREETER</template>
              <template #modal-body><BlogForm /> </template>
            </Modal>
          </button>
        </div>
        <Search />
        <Posts class="mt-3" />
      </div>
    </div>
  </main>
  <router-view />
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
export default {
  name: "App",
  setup() {
    return {
      AppState: computed(() => AppState),
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
