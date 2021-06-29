<template>
  <div class="app-main">
    <navbar />
    <back-button v-if="$route.name !== 'MenuHome'" />
    <router-view />
  </div>
</template>

<script>
  import Navbar from "../components/Navbar.vue";
  import BackButton from "../components/BackButton.vue";
  import conteudo from "../assets/conteudo.json";
  export default {
    components: { Navbar, BackButton },
    provide: {
      conteudo,
    },
  };
</script>

<style>
  .app-main {
    position: relative;
  }
</style>