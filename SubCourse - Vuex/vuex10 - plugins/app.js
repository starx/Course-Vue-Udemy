// import Vue from 'vue';
// import Vuex from 'vuex';
//
// Vue.use(Vuex);

const annoyingPlugin = store => {
    // Called when store is initialized
    store.subscribe((mutation, state) => {
        // Called after every mutation
        // Mutation comes in the format `{ type, payload }`
        console.log(mutation);
        if (mutation.type === 'doubleCount') {
            console.log('annoying');

            const max = 4;
            const min = 1;
            state.count = state.count - (Math.floor(Math.random() * (max - min + 1) + min ))
        }
    })
};

const store = new Vuex.Store({
    state: {
        count: 5
    },
    mutations: {
        doubleCount(state) {
            console.log('mutating');
            state.count = state.count * 2;
        }
    },
    plugins: [annoyingPlugin]
});

new Vue({
    el: '#app',
    store,
    data: {
    },
    computed: Vuex.mapState({
        count: state => state.count,
    }),
    methods: {
        doSomething() {
            this.$store.commit('doubleCount')
        }
    }
});
