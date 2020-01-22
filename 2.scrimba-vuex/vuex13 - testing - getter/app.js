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


const getters = {
    filteredProducts (state, { filterCategory }) {
        return state.products.filter(product => {
            return product.category === filterCategory
        })
    }
}

// Testing action
mocha.setup('bdd');
let assert = chai.assert;
let expect = chai.expect;

describe('getters', () => {
    it('filteredProducts', () => {
        const state = {
            products: [
                { id: 1, title: 'Apple', category: 'fruit' },
                { id: 2, title: 'Orange', category: 'fruit' },
                { id: 3, title: 'Carrot', category: 'vegetable' }
            ]
        }

        const filterCategory = 'fruit'

        const result = getters.filteredProducts(state, { filterCategory })

        expect(result).to.deep.equal([
            { id: 1, title: 'Apple', category: 'fruit' },
            { id: 2, title: 'Orange', category: 'fruit' }
        ])
    })
})


mocha.run();