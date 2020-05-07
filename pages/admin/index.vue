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
import AppButtonInput from '@/components/UI/AppButtonInput';
import PostList from '@/components/Posts/PostList';

export default {
  components: {
    PostList,
    AppButtonInput
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
  layout: 'admin',
  data() {
    return {
      isAdmin: true
    };
  },
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
