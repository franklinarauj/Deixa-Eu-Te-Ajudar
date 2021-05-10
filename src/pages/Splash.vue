<template>
  <div class="splash">
    <img class="logo" alt="Vue logo" src="../assets/logo-inicial.png" />
    <img class="botao" src="../assets/botao_vamos_la.png" alt="">

  </div>
</template>

<style>
body{
  min-height: 0cm;
}

@media(max-width: 600px){
    .logo{
      margin-top: 30%;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 35%;
    }
  }
@media(min-width: 601px){
    .logo{
      display: block;
      margin-top: 10%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 3%;
    }
  }
  
  .botao{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>

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
