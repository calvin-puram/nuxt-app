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
import EventServices from '@/Services/EventServices.js';
export default {
  components: {
    EventCard
  },
  async asyncData({ error }) {
    try {
      const res = await EventServices.getEvents();
      return {
        events: res.data
      };
    } catch (e) {
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
