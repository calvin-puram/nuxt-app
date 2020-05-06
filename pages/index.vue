<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
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
  </div>
</template>

<script>
import PostsPreview from '@/components/Posts/PostsPreview';
export default {
  components: {
    PostsPreview
  },
  head() {
    return {
      title: 'Latest Articles'
    };
  }
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/background-img.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
