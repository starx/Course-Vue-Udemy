<template>
  <div class="row mb-5">
    <app-quote
      @click.native="deleteQuote(index)"
      v-for="(quote, index) in quotes" :key="index"
    >{{ quote }}</app-quote>
  </div>
</template>

<script>
import Quote from '@/components/Quote.vue';

export default {
  props: ['quotes'],
  components: {
    appQuote: Quote,
  },
  methods: {
    deleteQuote(index) {
      this.$emit('quoteDeleted', index);
    },
  },
};
</script>
