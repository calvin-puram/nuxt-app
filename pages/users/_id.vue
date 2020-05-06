<template>
  <div>
    <h1>Users with id #{{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  layout: 'main',
  validate(data) {
    return /^\d+$/.test(data.params.id);
  }
};
</script>
