<template>
  <section class="featured-posts">
    <PostsPreview
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :is-admin="isAdmin"
      :title="post.title"
      :post-preview="post.postPreview"
      :thumbnail-link="post.thumbnailLink"
    />
  </section>
</template>

<script>
import PostsPreview from '@/components/Posts/PostsPreview';
export default {
  components: {
    PostsPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      required: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
