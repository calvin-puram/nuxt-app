<template>
  <nuxt-link :to="PostLink()" class="post-preview">
    <article>
      <div
        class="post-thumbnail"
        :style="{ backgroundImage: `url(${thumbnailLink})` }"
      ></div>
      <div class="post-content">
        <h1>{{ title }}</h1>
        <p>{{ postPreview }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    postPreview: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    thumbnailLink: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    PostLink() {
      return this.isAdmin ? `/admin/${this.id}` : `/posts/${this.id}`;
    }
  }
};
</script>

<style>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
