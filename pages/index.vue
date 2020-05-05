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
  asyncData({ $axios }) {
    return $axios.get('http://localhost:4000/events/').then(res => {
      return {
        events: res.data
      };
    });
  },
  head() {
    return {
      title: 'Events '
    };
  }
};
</script>
