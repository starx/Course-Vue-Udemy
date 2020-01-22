<template>
  <div>
    <div class="row justify-content-center">
      <div class="col-sm-8 col-12 col-md-6">
        <label>Quote</label>
        <textarea class="form-control" rows="3" v-model="quote"></textarea>
      </div>
    </div>
    <div class="row justify-content-center my-5">
      <div class="col-sm-8 col-12 col-md-6">
        <button class="btn btn-primary" @click.prevent="createNew">Add quote</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: '',
    };
  },
  methods: {
    createNew() {
      this.$emit('quoteAdded', this.quote);
      this.quote = '';
    },
  },
};
</script>
