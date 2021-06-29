<template>
  <div class="container">
    <h1>Temas</h1>
    <div
      class="theme"
      v-for="(theme, index) in themes"
      :key="index"
      @click="
        $router.push(
          `/${$route.params.year}/${$route.params.subject}/${index}`
        )
      "
    >
      {{ theme.name }}
    </div>
  </div>
</template>

<script>
  export default {
    inject: ["conteudo"],

    data() {
      return {
        themes: this.conteudo[this.$route.params.year].filter(
          (subject) => subject.name === this.$route.params.subject
        )[0].themes,
      };
    },
  };
</script>

<style scoped>
  .theme {
    display: block;
    font-size: 36px;
    margin-bottom: 30px;
  }
</style>