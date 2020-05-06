<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s - Technical blog post',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Read great articles about what is happening in tech world'
        }
      ]
    };
  }
};
</script>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
