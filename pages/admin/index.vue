<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButtonInput @click="$router.push('/admin/new-post')"
        >Create Post</AppButtonInput
      >
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList :is-admin="isAdmin" :posts="posts" />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  middleware: ['check-auth', 'auth'],
  async fetch({ store, error }) {
    try {
      await store.dispatch('posts/getPosts');
    } catch (e) {
      error({ statusCode: 400, message: 'Inavalid Request!' });
    }
  },
  data() {
    return {
      isAdmin: true
    };
  },
  computed: mapState({
    posts: state => state.posts.posts
  }),
  layout: 'admin',

  head() {
    return {
      title: 'Manage Post'
    };
  }
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
