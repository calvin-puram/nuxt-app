<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submitForm="onSubmit" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';
export default {
  layout: 'admin',
  components: {
    AdminPostForm
  },
  methods: {
    onSubmit(postData) {
      this.$store
        .dispatch('posts/postData', { ...postData, createdAt: new Date() })
        .then(() => {
          this.$router.push('/');
        });
    }
  }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
