<template>
  <div class="container">
    <Header></Header>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <Servers
          :active-server-id="activeServiceId"
          :servers="servers"
          @serverSelected="selectServer"
        ></Servers>
      </div>
      <div class="col-xs-12 col-sm-6">
        <ServerDetails
          :server="activeServer"
        ></ServerDetails>
      </div>
    </div>
    <hr>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import ServerDetails from '@/components/ServerDetails.vue';
import Servers from '@/components/Servers.vue';
import Footer from '@/components/Footer.vue';

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
