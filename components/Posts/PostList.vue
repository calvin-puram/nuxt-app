<template>
  <section class="featured-posts">
    <PostsPreview
      id="1"
      title="Blog One"
      post-preview="this is the first post of the article"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
    />
    <PostsPreview
      id="2"
      title="Blog Two"
      post-preview="this is the second post of the article"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
    />
    <PostsPreview
      id="3"
      title="Blog Three"
      post-preview="this is the third post of the article"
      thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
    />
  </section>
</template>

<script>
import PostsPreview from '@/components/Posts/PostsPreview';
export default {
  components: {
    PostsPreview
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
