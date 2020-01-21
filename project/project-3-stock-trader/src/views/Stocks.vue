<template>
  <div class="row">
    <app-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from '@/components/stock/Stock.vue';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      stocks: 'stocks/allStocks',
    }),
  },
  components: {
    appStock: Stock,
  },
};
</script>
