Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        mutationCount: 0,
        value: 0
    },
    mutations: {
        incrementMutationCount (state) {
            state.mutationCount++
        },
        incrementBy (state, payload) {
            state.value += payload.amount
        },
        increment (state) {
            state.value++
        },
        decrement (state) {
            state.mutationCount--;
            state.value--;
        },
        gotData (state, payload) {
            state.value = payload.value
        }
    },
    actions: {
        incrementMutationCountAsync ({ commit }) {
            return new Promise( (resolve, reject) => {
                setTimeout(() => {
                    commit('incrementMutationCount');
                    resolve();
                }, 1000)
            })
        },
        increment ({ dispatch, commit }) {
            return dispatch('incrementMutationCountAsync').then(() => {
                commit('increment')
            });
        },
        async getData () {
            return new Promise( (resolve, reject) => {
                setTimeout(() => {
                    resolve({ value: 152 });
                }, 1000)
            })
        },
        async refreshData ({ dispatch, commit }) {
            await dispatch('incrementMutationCountAsync');
            commit('gotData', await dispatch('getData'));
        },
    }
});

// import { mapActions, mapMutations } from 'vuex';

new Vue({
    el: '#app',
    store,
    data: {
    },
    computed: Vuex.mapState([
        'value',
        'mutationCount'
    ]),
    methods: {
        ...Vuex.mapActions([
            'increment',
            'refreshData',
        ]),
        ...Vuex.mapMutations([
            'decrement'
        ])
    },
});