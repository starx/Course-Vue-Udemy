Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        incrementBy (state, payload) {
            state.count += payload.amount
        },
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        }
    },
    actions: {
        // increment (context) {
        //     context.commit('increment')
        // },
        incrementAsync ({ commit }) {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        }
    }
});

// import { mapState } from 'vuex';

new Vue({
    el: '#app',
    store,
    data: {
    },
    computed: Vuex.mapState([
        'count'
    ]),
    // methods: {
    //     increment () {
    //         this.$store.dispatch('incrementAsync')
    //     }
    // },
    methods: {
        ...Vuex.mapActions({
            'increment': 'incrementAsync'
        }),
        ...Vuex.mapMutations([
            'decrement'
        ])
    },
});