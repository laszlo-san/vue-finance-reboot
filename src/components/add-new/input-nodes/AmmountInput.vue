<template>
  <div class="form-group row" :class='{error: validator.$error}'>
    <label class="col-sm-2 col-form-label" for="ammount">Ammount</label>
    <div class="col-sm-4">
      <input
        class="form-control"
        type="number"
        id="ammount"
        v-model="ammount"
        @input="validator.$touch()"
        >
        <p v-if="validator.$error">A number must be given! (ex: 340)</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    validator: Object,
  },
  computed: {
    ammount: {
      get() {
        return this.$store.state.newItem.ammount;
      },
      set(value) {
        this.$store.commit('changeAmmount', value);
      },
    },
  },
};
</script>

<style scoped>
.error input {
  border: red solid;
}
.error p {
  color: red;
}
</style>
