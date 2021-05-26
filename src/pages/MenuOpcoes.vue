<template>
  <div class="container">
    <div id="interna">
      <h1 @click="$router.push('/menu/contato')">Contato</h1>
      <h1 @click="$router.push('/menu/quem_somos')">Quem Somos</h1>
      <h1 @click="$router.push('/menu/nosso_objetivo')">Nosso Objetivo</h1>
      <h1 @click="$router.push('/menu/referencias')">Referencias</h1>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.container{
  margin-top: 50px;
}
a:link { 
 text-decoration:none;
 color: black; 
} 
</style>