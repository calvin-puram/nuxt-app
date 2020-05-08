<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :loaded-post="singlePost" @submitForm="updatePost" />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  layout: 'admin',

  async fetch({ store, error, params }) {
    try {
      await store.dispatch('posts/setPost', params.postId);
    } catch (e) {
      error({ statusCode: 400, message: 'Inavalid Request!' });
    }
  },
  computed: mapState({
    singlePost: state => state.posts.post
  }),
  methods: {
    updatePost(data) {
      this.$store
        .dispatch('posts/updatePost', {
          data,
          id: this.$route.params.postId
        })
        .then(() => {
          this.$router.push(`/posts/${this.$route.params.postId}`);
        });
    }
  },
  head() {
    return {
      title: 'Manage Post'
    };
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
