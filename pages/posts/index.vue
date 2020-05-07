<template>
  <div class="posts-page">
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';
export default {
  components: {
    PostList
  },
  async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.get('http://localhost:4000/posts/');
      return {
        posts: data
      };
    } catch (e) {
      error({ statusCode: 400, message: 'Inavalid Request!' });
    }
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
