<template>
  <div class="search row m-0 justify-content-center">
    <div class="px-5 pt-2">
      <form @submit.prevent="searchPosts" class="input-group">
        <input
          v-model="query"
          class="form-control"
          placeholder="Search Posts"
          type="text"
          name=""
          id=""
        />
        <button class="btn btn-outline-primary" type="submit">Search</button>
      </form>
      <div class="mt-2" v-if="pages > 0">
        <button
          class="btn me-1 text-white selectable"
          :class="{
            'btn-primary': page === currentPage,
            'btn-dark': page !== currentPage,
          }"
          :disabled="page === currentPage"
          v-for="page in pages"
          :key="page"
          @click="getPage(page)"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { searchService } from "../services/SearchService";

export default {
  // props: { searchText: { type: String, required: true } },
  setup() {
    const query = ref("");
    return {
      query,
      pages: computed(() => AppState.pages),
      currentPage: computed(() => AppState.currentPage),
      async searchPosts() {
        try {
          // logger.log("Hi");
          await searchService.findPostByQuery(query.value);
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "Error in the Search");
        }
      },
      async getPage(page) {
        try {
          await searchService.findPostByQuery(query.value, page);
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "Error in the Search");
        }
      },
    };
  },
};
</script>