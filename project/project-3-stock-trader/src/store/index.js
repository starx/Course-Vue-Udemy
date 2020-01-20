import Vue from 'vue';
import Vuex from 'vuex';
import StocksModule from '@/store/modules/stocks';
import PortfolioModule from '@/store/modules/portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    stocks: StocksModule,
    portfolio: PortfolioModule,
  },
});
