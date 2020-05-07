<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      displaySidenav: false
    };
  },
  head() {
    return {
      titleTemplate: '%s - Manage Post',
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
