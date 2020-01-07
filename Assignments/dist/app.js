// import Vue from 'vue';
// import Vuex from 'vuex';
//
// Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0 ,
        products: [
            { id: 1, title: 'Apple', category: 'fruit' },
            { id: 2, title: 'Orange', category: 'fruit' },
            { id: 3, title: 'Carrot', category: 'vegetable' }
        ]
    },
    mutations: {
        increment (state) { state.count++ }
    }
})



// Testing
mocha.setup('bdd');
let assert = chai.assert;
let expect = chai.expect;

mocha.run();