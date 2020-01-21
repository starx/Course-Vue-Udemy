<template>
  <div class="row">
    <app-portfolio-stock
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"></app-portfolio-stock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Stock from '@/components/portfolio/Stock.vue';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      stocks: 'portfolio/portfolioStocks',
    }),
  },
  components: {
    appPortfolioStock: Stock,
  },
};
</script>
