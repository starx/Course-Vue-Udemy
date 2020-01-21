import stocks from '@/data/stocks';

const data = {
  stocks: [],
};

const mutations = {
  SET_STOCKS(state, payload) {
    state.stocks = payload;
  },
  RND_STOCKS(state) {
    /* eslint no-param-reassign: ["error", { "props": false }] */
    state.stocks.forEach((stock) => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  },
};

const getters = {
  allStocks: state => state.stocks,
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit('portfolio/BUY_STOCK', order, { root: true });
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({ commit }) => {
    console.log('Randomising');
    commit('RND_STOCKS');
  },
};

export default {
  namespaced: true,
  state: data,
  mutations,
  getters,
  actions,
};
