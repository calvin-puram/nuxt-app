<template>
  <div>
    <h1>Event #{{ event.title }}</h1>
  </div>
</template>

<script>
import EventServices from '@/Services/EventServices.js';
export default {
  async asyncData({ error, params }) {
    try {
      const { data } = await EventServices.getEvent(params.id);

      return {
        event: data
      };
    } catch (e) {
      error({
        statusCode: 503,
        message: `Unable to fetch event #${params.id}`
      });
    }
  },

  head() {
    return {
      title: 'All About ' + this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'all the gist about ' + this.event.title
        }
      ]
    };
  }
};
</script>
