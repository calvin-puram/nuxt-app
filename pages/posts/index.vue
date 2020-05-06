<template>
  <div class="posts-page">
    <h1>posts</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'All Articles',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'All post articles'
        }
      ]
    };
  }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
