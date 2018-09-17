<template>
  <div>
    <app-table v-if="allData.length > 10" :data="allData"></app-table>
    <div v-else >LOADING....
      <i class="fa fa-spinner fa-spin" style="font-size:24px"></i></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Table from './Table.vue';

export default {
  components: {
    appTable: Table,
  },
  computed: {
    ...mapGetters([
      'allData',
    ]),
  },
  methods: {
    ...mapActions([
      'getData',
    ]),
  },
  created() {
    this.getData();
  },

};
</script>

<style scoped>
div {margin: 10px;}
</style>
