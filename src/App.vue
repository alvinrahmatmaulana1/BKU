<script>
import { RouterLink , RouterView } from 'vue-router';
import NavbarBku from './components/NavbarBku.vue';
import Footer from './components/Footer.vue';
export default {
    name: 'App',
    components : {
    NavbarBku,
    Footer
}
  }
</script>

<template>
  <NavbarBku/>
  <router-view></router-view>
  <Footer/>
</template>
