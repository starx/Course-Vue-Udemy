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
});


// actions.js
// import shop from '../api/shop'

// an example action

const getAllProducts = ({ commit }) => {
    commit('REQUEST_PRODUCTS')
    shop.getProducts(products => {
        commit('RECEIVE_PRODUCTS', products)
    })
}

// Testing action
mocha.setup('bdd');
let assert = chai.assert;
let expect = chai.expect;
const actionsInjector = require('inject-loader!./actions')

// create the module with our mocks
const actions = actionsInjector({
    '../api/shop': {
        getProducts (cb) {
            setTimeout(() => {
                cb([ /* mocked response */ ])
            }, 100)
        }
    }
})

// helper for testing action with expected mutations
const testAction = (action, payload, state, expectedMutations, done) => {
    let count = 0

    // mock commit
    const commit = (type, payload) => {
        const mutation = expectedMutations[count]

        try {
            expect(type).to.equal(mutation.type)
            if (payload) {
                expect(payload).to.deep.equal(mutation.payload)
            }
        } catch (error) {
            done(error)
        }

        count++
        if (count >= expectedMutations.length) {
            done()
        }
    }

    // call the action with mocked store and arguments
    action({ commit, state }, payload)

    // check if no mutations should have been dispatched
    if (expectedMutations.length === 0) {
        expect(count).to.equal(0)
        done()
    }
}


mocha.run();