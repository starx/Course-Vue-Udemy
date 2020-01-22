const data = {
  funds: 10000,
  stocks: [],
};

const mutations = {
  SET_FUNDS(state, payload) {
    state.funds = payload;
  },
  SET_STOCKS(state, payload) {
    state.stocks = payload;
  },
  BUY_STOCK(state, { stockId, stockPrice, quantity }) {
    const record = state.stocks.find(element => element.id === stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity,
      });
    }
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state, { stockId, stockPrice, quantity }) {
    const record = state.stocks.find(element => element.id === stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
};

const getters = {
  portfolioStocks(state, localGetters, rootState, rootGetters) {
    return state.stocks.map((stock) => {
      const record = rootGetters['stocks/allStocks'].find(element => element.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      };
    });
  },
  funds(state) {
    return state.funds;
  },
};

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order);
  },
};

export default {
  namespaced: true,
  state: data,
  mutations,
  getters,
  actions,
};
