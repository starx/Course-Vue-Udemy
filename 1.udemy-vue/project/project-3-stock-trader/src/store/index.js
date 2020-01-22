import Vue from 'vue';
import Vuex from 'vuex';
import StocksModule from '@/store/modules/stocks';
import PortfolioModule from '@/store/modules/portfolio';
import axios from '@/axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    loadAppData({ commit }) {
      axios.get('/data.json')
        .then((res) => {
          console.log(res);
          const { funds, portfolioStocks, stocks } = res.data;
          console.log(funds, portfolioStocks, stocks);
          if (funds) {
            commit('portfolio/SET_FUNDS', funds);
          }
          if (portfolioStocks) {
            commit('portfolio/SET_STOCKS', portfolioStocks);
          }
          if (stocks) {
            commit('stocks/SET_STOCKS', stocks);
          }
        })
        .catch(error => console.log(error));
    },
  },
  modules: {
    stocks: StocksModule,
    portfolio: PortfolioModule,
  },
});
