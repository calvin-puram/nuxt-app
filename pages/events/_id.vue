<template>
  <div>
    <h1>Event #{{ id }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  head() {
    return {
      title: 'All About Event #' + this.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'all the gist about event #' + this.id
        }
      ]
    };
  }
};
</script>
