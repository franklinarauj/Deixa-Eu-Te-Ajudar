<template>
  <div class="container">
    <h1>Escolha a matéria</h1>

    <div id="subject-list">
      <div
        class="item"
        v-for="(subject, index) in subjects"
        :key="index"
        @click="$router.push(`/${$route.params.year}/${subject.name}`)"
      >
        <div>
          <img src="../assets/biologia.svg" />
        </div>

        <span>{{ subject.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  const images = require.context("../assets/", false, /\.svg$/);

  export default {
    data() {
      return {
        subjects: this.conteudo[this.$route.params.year],
      };
    },
    methods: {
      getImg(str) {
        return images("./" + str + ".svg");
      },
    },
    inject: ["conteudo"],
  };
</script>

<style>
  #subject-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: -30px;
  }

  #subject-list .item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 33%;
    margin-top: 30px;
  }

  #subject-list .item span {
    text-align: center;
    font-size: 24px;
    font-weight: normal;
    margin-top: 4px;
  }

  #subject-list .item div {
    width: 90px;
    height: 90px;
    background: var(--secondary);
    border-radius: 10px;
  }

  #subject-list .item div img {
    width: 100%;
  }
</style>