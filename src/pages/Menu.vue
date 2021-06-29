<template>
  <div class="app-main">
    <navbar />
    <back-button />
    <router-view />
  </div>
</template>

<script>
  import Navbar from "../components/Navbar.vue";
  import BackButton from "@/components/BackButton.vue";
  export default {
    components: { Navbar, BackButton },
  };
</script>

<style>
  .app-main {
    position: relative;
  }
</style>