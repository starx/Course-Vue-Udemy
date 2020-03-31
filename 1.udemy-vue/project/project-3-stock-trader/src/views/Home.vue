<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-justify">
        <h1>Trade or View your Portfolio</h1>
        <h6>You may Save & Load your Data</h6>
        <h6>Click on 'End Day' to begin a New Day!</h6>
        <hr>
        <p>Your Funds: {{ funds | currency }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters['portfolio/funds'];
    },
  },
};
</script>
