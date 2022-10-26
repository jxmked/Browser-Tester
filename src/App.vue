<script setup lang="ts">
  import Navigation from './components/Navigation.vue';
  import Description from "./components/Description.vue";
  import TestList from "./components/TestList.vue";
</script>

<template>
  <Navigation title="Quick Browser Tester" />
  <Description />
  <div class="container">
    <as>sadasd</as>
    <TestList title="Fuck" items="{{Modernizr}}"/>
  </div>
</template>
