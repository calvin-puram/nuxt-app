<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author" :value="editedPost.author"
      >Author Name</AppControlInput
    >

    <AppControlInput v-model="editedPost.title" :value="editedPost.title"
      >Title</AppControlInput
    >
    <AppControlInput
      v-model="editedPost.thumbnailLink"
      :value="editedPost.thumbnailLink"
      >Thunbnail Link</AppControlInput
    >
    <AppControlInput
      v-model="editedPost.postPreview"
      control-type="textarea"
      :value="editedPost.postPreview"
      >Preview Text</AppControlInput
    >
    <AppControlInput
      v-model="editedPost.content"
      control-type="textarea"
      :value="editedPost.content"
      >Content</AppControlInput
    >

    <AppButtonInput type="submit">Save</AppButtonInput>
    <AppButtonInput
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel</AppButtonInput
    >
  </form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput';
import AppButtonInput from '@/components/UI/AppButtonInput';
export default {
  components: {
    AppControlInput,
    AppButtonInput
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    loadedPost: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.loadedPost
        ? { ...this.loadedPost }
        : {
            author: '',
            title: '',
            thumbnailLink: '',
            postPreview: '',
            content: ''
          }
    };
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit('submitForm', this.editedPost);
    },
    onCancel() {
      // Navigate back
      this.$router.push('/admin');
    }
  }
};
</script>
