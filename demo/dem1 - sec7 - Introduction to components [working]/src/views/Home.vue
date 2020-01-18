<template>
  <div class="container">
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Servers from '@/components/Servers.vue';
import ServerDetails from '@/components/ServerDetails.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    'app-header': Header,
    'app-servers': Servers,
    'app-server-details': ServerDetails,
    'app-footer': Footer,
  },
};
</script>
