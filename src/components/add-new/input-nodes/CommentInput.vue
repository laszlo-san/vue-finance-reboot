<template>
  <div class="form-group row">
    <label class="col-sm-2 col-form-label" for="comment">Comment</label>
    <div class="col-sm-4">
      <textarea class="form-control" type="number" id="comment" v-model="comment">
      </textarea>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    comment: {
      get() {
        return this.$store.state.newItem.comment;
      },
      set(value) {
        this.$store.commit('changeComment', value);
      },
    },
  },
};
</script>
