<script setup lang="ts">
  defineProps<{
    title: string
  }>();
</script>

<template>
  <nav class="main-nav">
    <div class="">
      <h1>{{ title }}</h1>
    </div>
  </nav>
</template>

<style scoped>
  .main-nav {
    background-color: #eeeef2;
    position: static;
    width: 100%;
    max-width: 650px;
    height: 60px;
    cursor: context-menu;
    padding: 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center
  }

  .main-nav > div {
    width: 100%;
  }

  .main-nav > div > h1 {
    width: 90%;
    font-family: "Caviar Dreams";
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    color: #4a4a42;
    margin: auto;
    cursor: context-menu;
    font-size: 1.3rem;
  }

</style>
