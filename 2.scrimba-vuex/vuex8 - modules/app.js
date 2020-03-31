// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

const moduleA = {
    namespaced: true,
    state: {
        count: 3
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getters: {
        doubleCount (state) {
            return state.count * 2
        }
    },
    actions: {
        incrementIfOdd({state, commit}) {
            if (state.count % 2 === 1) {
                commit('increment');
            }
        }
    }
};

const moduleB = {
    namespaced: true,
    modules: {
        subModuleName: {
            namespaced: true,
            state: {
                count: 2
            },
            mutations: {
                login () {}
            },
            getters: {
                login () {}
            },
            actions: {
                login () {}
            }
        }
    },
    state: {
        count: 8
    },
    mutations: {

    },
    getters: {
        someGetter (state, getters, rootState, rootGetters) {
            rootState.count;
            state.count;

            // Access getters of self and root like the following
            // getters.someOtherGetter;
            // rootGetters.someOtherGetter;
        }
    },
    actions: {
        someAction({ dispatch, commit, getters, rootGetters }) {
            getters.someGetter;
            rootGetters.someGetter;

            // Call the dispatch and commit on the SELF using the following
            // dispatch('someOtherAction');
            // commit('someMutation');

            // Call the dispatch and commit on the ROOT using the following
            // dispatch('someOtherAction', null, { root: true });
            // commit('someMutation', null, { root: true });
        }
    }
};

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    },
    state: {
        count: 2
    },
    mutations: {

    },
    getters: {

    },
    actions: {

    }
});


new Vue({
    el: '#app',
    store,
    data: {
    },
    computed: Vuex.mapState({
        a: state => state.a.count,
        b: state => state.b.subModuleName.count,
    }),
    
    // Example: directly accessing a submodule action
    // methods: mapActions([
    //     'some/nested/module/foo' // Using it with: this['some/nested/module/foo']()
    // ]),

    // Example: Accessing a submodule action without having to write the full path
    // methods: mapActions('some/nested/module', [
    //     'foo' // Use it with: this.foo()
    // ]),
});

console.log(store.state.a.count);
// Below works when a is not namespace'd
// store.commit('increment');
store.commit('a/increment')
console.log(store.state.a.count);

console.log(store.state.b.count);
store.commit('b/subModuleName/login');
store.dispatch('b/subModuleName/login');
store.getters['b/subModuleName/login'];