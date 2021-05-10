<template>
  <div class="splash">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
  export default {
    name: "Splash",

    mounted() {
      document.body.classList.add("splash");
    },
    destroyed() {
      document.body.classList.remove("splash");
    },
  };
</script>
