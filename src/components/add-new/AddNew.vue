<template>
  <form >
    <app-sign-radio></app-sign-radio>
    <app-ammount-input v-model="ammount" :validator="$v.ammount"></app-ammount-input>
    <app-comment-input></app-comment-input>
    <app-date-input></app-date-input>
    <app-type-input></app-type-input>
    <div class="form-group row">
      <div class="col">
        <button
          type="submit"
          class="btn btn-primary"
          @click.prevent="submitForm"
          :disabled="$v.$error">
          Add
        </button>
      </div>
      <div class="col">
        <button class="btn btn-danger" @click.prevent="resetForm">Reset</button>
      </div>
    </div>
  </form>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators';
import { mapGetters, mapActions } from 'vuex';

import SignRadio from './input-nodes/SignRadio.vue';
import AmmountInput from './input-nodes/AmmountInput.vue';
import CommentInput from './input-nodes/CommentInput.vue';
import DateInput from './input-nodes/DateInput.vue';
import TypeInput from './input-nodes/TypeInput.vue';

export default {
  components: {
    'app-sign-radio': SignRadio,
    'app-ammount-input': AmmountInput,
    'app-comment-input': CommentInput,
    'app-date-input': DateInput,
    'app-type-input': TypeInput,
  },
  computed: {
    ...mapGetters([
      'ammount',
    ]),
  },
  methods: {
    ...mapActions([
      'submitAddNewForm',
    ]),
    submitForm() {
      this.submitAddNewForm();
      this.$v.$reset();
    },
    resetForm() {
      this.$store.commit('resetNewItemState');
      this.$v.$reset();
    },
  },
  validations: {
    ammount: {
      required,
      numeric,
    },
  },
};
</script>

<style>
form {margin: 10px}
</style>
