Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 4
    }
});

new Vue({
    el: '#app',
    store,
    data() {
        return {
            localCount: 3
        }
    },
    computed: Vuex.mapState({
        count: state => state.count,
        countPlusLocalState(state) {
            return state.count + this.localCount;
        }
    })
});
