<template>
  <div class="posts-page">
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch('posts/getPosts');
    } catch (e) {
      error({ statusCode: 400, message: 'Inavalid Request!' });
    }
  },
  computed: mapState({
    posts: state => state.posts.posts
  }),
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
