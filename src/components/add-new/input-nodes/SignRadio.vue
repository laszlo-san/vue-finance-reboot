<template>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Sign</legend>
      <div class="col-sm-10">

        <div class="form-check">
          <input
             class="form-check-input"
             type="radio"
             name="signRadio"
             id="signRadioMinus"
             value="-"
             v-model="direction">
          <label
             class="form-check-label"
             for="signRadioMinus"
             >
             -
          </label>
        </div>
        <div class="form-check">
          <input
             class="form-check-input"
             type="radio"
             name="signRadio"
             id="signRadioPlus"
             value="+"
             v-model="direction">
          <label class="form-check-label" for="signRadioPlus">
            +
          </label>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  computed: {
    direction: {
      get() {
        return this.$store.state.newItem.direction;
      },
      set(value) {
        this.$store.commit('changeDirection', value);
      },
    },
  },
};
</script>
