<template>
  <div class="container">
    <h1>Escolha o seu ano</h1>

    <ul id="menu-home">
      <li @click="$router.push('/1')">1º Ano</li>
      <li>2º Ano</li>
      <li>3º Ano</li>
    </ul>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .container {
    text-align: center;
    padding: 10px 30px 10px 30px;
  }

  .container h1 {
    font-size: 48px;
    line-height: 34.88px;
    text-decoration: underline;
    color: #2c2c2c;
    text-decoration-thickness: 1.6px;
    margin: 20px 0 70px 0;
  }

  #menu-home {
    font-size: 48px;
    width: 100%;

    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #menu-home li {
    width: 100%;
    border-radius: 10px;
    background: var(--secondary);
    color: #fff;
    margin-bottom: 60px;

    padding: 6px 0px;

    cursor: pointer;
  }
</style>