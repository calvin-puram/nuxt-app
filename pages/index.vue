<template>
  <div>
    <h1>
      Events
    </h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
      data-index="event.id"
    />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard';
export default {
  components: {
    EventCard
  },
  async asyncData({ $axios, error }) {
    try {
      const res = await $axios.get('http://localhost:4000/events/');
      return {
        events: res.data
      };
    } catch (error) {
      error({
        statusCode: 503,
        message: 'unable to fetch events at this time. Please try again'
      });
    }
  },
  head() {
    return {
      title: 'Events '
    };
  }
};
</script>
