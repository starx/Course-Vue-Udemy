<template>
  <div class="container">
    <div class="row justify-content-md-center"">
      <div class="col-12 col-sm-8 com-dh-6">
        <h1>Directive Exercise</h1>
        <!-- Exercise -->
        <button v-myon:click="runThisFunction()">Fantastic button</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

  data() {
    return {
      activeServerId: null,
      servers: [
        { id: 1, status: 'normal' },
        { id: 2, status: 'critical' },
        { id: 3, status: 'unknown' },
        { id: 4, status: 'normal' },
      ],
    };
  },
  computed: {
    activeServer() {
      console.log('activeServerId', this.activeServerId);
      return this.servers.find(element => element.id === this.activeServerId);
    },
  },
  methods: {
    selectServer(serverId) {
      console.log('serverId', serverId);
      this.activeServerId = serverId;
    },
  },
  components: {
    Header,
    Footer,
    Servers,
    ServerDetails,
  },
};
</script>
