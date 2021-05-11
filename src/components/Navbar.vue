<template>
  <div class="nav">
    <img id="logo" src="../assets/logo.svg" @click="$router.push('/home')" />
    <img id="menu" src="../assets/menu.svg" />
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 80px;
    background: linear-gradient(180deg, #77ebd4 84.9%, #fcfcfc 100%), #83ffe6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    mix-blend-mode: normal;
  }

  #logo {
    cursor: pointer;
    margin-left: 4px;
  }

  #menu {
    margin-right: 25px;
    height: 28px;
  }
</style>