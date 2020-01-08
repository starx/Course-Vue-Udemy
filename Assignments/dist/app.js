Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        playerHealth: 80,
        monsterHealth: 90,
        gameIsRunning: false
    },
    mutations: {
        startGame(state) {
            state.gameIsRunning = true;
        },
        decreasePlayerHealth(state, payload) {
            console.log(payload);
            state.playerHealth -= payload.value;
        },
        decreaseMonsterHealth(state, payload) {
            console.log(payload);
            state.monsterHealth -= payload.value;
        },
    },
    actions: {
        getRandomAttackValue({ state }) {
            console.log('random called')
            let max = 10;
            let min = 1;
            let randomAttack = Math.floor(Math.random() * (max - min + 1) + min);
            let attack = randomAttack;
            return attack;
        },
        attackMonster({dispatch, commit }) {
            dispatch('getRandomAttackValue').then((attackValue) => {
                commit('decreaseMonsterHealth', { value: attackValue });
            });
        },
        attackPlayer({dispatch, commit }) {
            dispatch('getRandomAttackValue').then((attackValue) => {
                commit('decreasePlayerHealth', { value: attackValue });
            });
        },
    }
});
var app = new Vue({
    el: "#app",
    store,
    data() {
        return {}
    },
    computed: {

        ...Vuex.mapState([
            'playerHealth',
            'monsterHealth',
            'gameIsRunning',
        ]),
    },
    methods: {
        ...Vuex.mapMutations([
            'startGame'
        ]),
        ...Vuex.mapActions([
            'attackPlayer',
            'attackMonster',
        ])

    },
});