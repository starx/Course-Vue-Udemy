<template>
  <ul class="list-group">
    <ServerList
      v-for="server in servers"
      :key="server.id"
      :id="server.id"
      :status="server.status"
      @serverSelected="$emit('serverSelected', $event)"
    ></ServerList>
  </ul>
</template>

<script>
import ServerList from '@/components/ServerList.vue';

export default {
  props: {
    servers: Array,
  },
  components: {
    ServerList,
  },
};
</script>
