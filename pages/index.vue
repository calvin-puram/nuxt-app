<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
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
</style>
