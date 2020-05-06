<template>
  <div class="posts-page">
    <PostList />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';
export default {
  components: {
    PostList
  },
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
