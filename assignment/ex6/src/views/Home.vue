<template>
  <div class="container">
    <Header></Header>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <Servers></Servers>
      </div>
      <div class="col-xs-12 col-sm-6">
        <ServerDetails></ServerDetails>
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
  components: {
    Header,
    Footer,
    Servers,
    ServerDetails,
  },
};
</script>
