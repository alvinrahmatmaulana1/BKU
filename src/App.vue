<script>
import { RouterLink , RouterView } from 'vue-router';
import NavbarBku from './components/NavbarBku.vue';
export default {
    name: 'App',
    components : {
      NavbarBku
    }
  }
</script>

<template>
  <NavbarBku/>
  <router-view></router-view>
</template>
