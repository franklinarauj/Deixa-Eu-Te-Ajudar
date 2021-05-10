<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  :root {
    --primary: #83FFE6;
    --secondary: #FF5F5F;
  }

  @font-face {
    font-family: Leo;
    src: url("./assets/Leo hates school.ttf");
  }

  #app {
    font-family: "Leo";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    min-height: 100vh;
    background: var(--primary);
  }
</style>
