<template>
  <div class="container">
    <h1>Temas</h1>
    <span @click="$router.push('/content')">OVD - Origem da Vida</span>
    <span @click="$router.push('/content')">BIOC - Biomoléculas</span>
    <span @click="$router.push('/content')">CIT - Citologia</span>
    <span @click="$router.push('/content')">EMBE - Embriologia</span>
    <span @click="$router.push('/content')">HIH - Histologia Humana</span>
    <span @click="$router.push('/content')">FHA - Fisiologia Humana e Animal</span>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  span {
    display: block;
    font-size: 36px;
    margin-bottom: 30px;
  }
</style>