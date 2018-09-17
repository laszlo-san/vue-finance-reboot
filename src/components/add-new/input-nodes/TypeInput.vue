<template>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label" for="typeSelect">Type</label>
    <div class="col-sm-4">
      <select class="form-control" id="typeSelect" v-model="type">
        <option selected value="food">Food</option>
        <option value="home">Home</option>
        <option value="misc">Misc</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    type: {
      get() {
        return this.$store.state.newItem.type;
      },
      set(value) {
        this.$store.commit('changeType', value);
      },
    },
  },
};
</script>
