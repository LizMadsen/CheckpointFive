<template>
  <form @submit.prevent="create()">
    <input
      type="text"
      name="post-title"
      placeholder="Title"
      required
      v-model="post.title"
    />
    <textarea
      name="post-body"
      cols="30"
      rows="10"
      min="10"
      required
      placeholder="Post"
      v-model="post.body"
    >
    </textarea>
  </form>
</template>


<script>
export default {
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>