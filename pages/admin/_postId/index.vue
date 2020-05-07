<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm';
export default {
  components: {
    AdminPostForm
  },
  head() {
    return {
      title: 'Manage Post'
    };
  }
};
</script>
