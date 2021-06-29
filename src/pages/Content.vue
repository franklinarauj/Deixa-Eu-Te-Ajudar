<template>
  <div class="container">
    <h1 class="theme-name" id="theme-name">{{ theme.name }}</h1>
    <pre class="content">
      {{ theme.content }}
    </pre>
  </div>
</template>

<script>
  export default {
    inject: ["conteudo"],
    data() {
      return {
        theme: this.conteudo[this.$route.params.year].filter(
          (subject) => subject.name === this.$route.params.subject
        )[0].themes[this.$route.params.theme],
      };
    },
  };
</script>

<style>
  .theme-name {
    font-size: 28px !important;
    margin-bottom: 25px !important;
  }

  .content {
    text-align: justify;
    font-size: 18px;
    font-family: "Roboto";
    max-width: 100%;
    word-break: keep-all;
    white-space: pre-wrap;
  }
</style>