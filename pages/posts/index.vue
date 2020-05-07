<template>
  <div class="posts-page">
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PostList from '@/components/Posts/PostList';
export default {
  components: {
    PostList
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('posts/setPosts');
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
