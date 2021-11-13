<template>
  <div class="search row m-0 justify-content-center">
    <div class="col-8 px-5 pt-2">
      <form @submit.prevent="searchPosts" class="input-group">
        <input
          v-model="searchText"
          class="form-control"
          placeholder="Search Posts"
          type="text"
          name=""
          id=""
        />
        <button class="btn btn-outline-primary">Search</button>
      </form>
    </div>
  </div>
</template>