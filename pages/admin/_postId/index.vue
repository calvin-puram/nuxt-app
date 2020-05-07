<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :loaded-post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';
export default {
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: 'calvin job',
        title: 'fundamental web training',
        thumbnailLink:
          'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
        content: 'this is a new post today'
      }
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
