Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done);
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length;
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id);
        }
    }
});

new Vue({
    el: '#app',
    store,
    data() {
        return {
        }
    },
    computed: {
        doneTodosCount () {
            return this.$store.getters.doneTodosCount
        }
    }
});

console.log(
    store.getters.doneTodos,
    store.getters.doneTodosCount,
    store.getters.getTodoById(2)
);
