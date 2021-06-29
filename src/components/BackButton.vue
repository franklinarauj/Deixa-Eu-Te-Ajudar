<template>
  <div class="back-button" @click="$router.back()">
    <mdicon class="icon" size="40" name="chevron-left" />
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .back-button {
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #77ebd4;
    margin: 15px 0 0 10px;

    background: #77ebd4;

    border-radius: 50%;

    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

    position: absolute;
    top: 78px;
  }

  .icon {
    margin: 0;
  }

  .icon svg {
    color: #fff;
  }
</style>