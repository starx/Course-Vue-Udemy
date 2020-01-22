<template>
  <div>
    <h2>Id: {{ server.id }}</h2>
    <div>Status: {{ server.status }}</div>
    <button
      @click="server.status = 'normal'"
    >Change to Normal</button>
  </div>
</template>

<script>
export default {
  props: {
    server: Object,
  },
};
</script>
