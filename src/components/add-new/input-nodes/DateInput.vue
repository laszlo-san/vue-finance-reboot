<template>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label" for="date">Date</label>
    <div class="col-sm-4">
      <input class="form-control" type="date" id="date" v-model="date">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    date: {
      get() {
        return this.$store.state.newItem.date;
      },
      set(value) {
        this.$store.commit('changeDate', value);
      },
    },
  },
};
</script>
