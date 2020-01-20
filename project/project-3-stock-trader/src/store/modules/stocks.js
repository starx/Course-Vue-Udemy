import stocks from '@/data/stocks';

const data = {
  stocks: [],
};

const mutations = {
  SET_STOCKS(state, payload) {
    state.stocks = payload;
  },
  RND_STOCKS(state) {
    console.log(state);
  },
};

const getters = {
  allStocks: state => state.stocks,
};

const actions = {
  buyStock: ({ commit }, order) => {
    console.log(order);
    commit();
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS');
  },
};

export default {
  state: data,
  mutations,
  getters,
  actions,
};
