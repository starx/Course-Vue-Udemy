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
    //         this.$store.commit('increment')
    //     }
    // },
    // methods: Vuex.mapMutations([
    //     'increment',
    //     'incrementBy',
    // ]),
    methods: {
        ...Vuex.mapMutations([
            'increment',
            'incrementBy',
            'decrement',
        ]),
        testAdditional() {
            console.log('count: ' + this.$store.state.count);
        }
    },
});



// store.commit('increment');
// console.log(store.state.count);

// // store.commit({
// //     type: 'incrementBy',
// //     amount: 40
// // })
// store.commit('incrementBy', { amount: 28 });
// console.log(store.state.count);
