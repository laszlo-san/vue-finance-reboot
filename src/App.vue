<template>
  <div id="app">
    <app-header></app-header>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    appHeader: Header,
  },
};
</script>

<style>
</style>
