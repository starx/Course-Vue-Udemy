Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        playerHealth: 0,
        monsterHealth: 0,
        specialAttacks: 0,
        healthPotions: 0,
        gameIsRunning: false,
        turns: [],
        playerWon: null,
    },
    mutations: {
        startGame(state) {
            state.gameIsRunning = true;
        },
        stopGame(state) {
            state.gameIsRunning = false;
        },
        resetGame(state) {
            state.playerHealth = 100;
            state.monsterHealth = 100;
            state.specialAttacks = 2;
            state.healthPotions = 2;
            state.turns = [];
            state.playerWon = null;
        },
        decreasePlayerHealth(state, payload) {
            if (!state.gameIsRunning) return;
            if (state.playerHealth) {
                if (state.playerHealth <= payload.value) {
                    state.playerHealth = 0;
                } else {
                    state.playerHealth -= payload.value;
                }
            }
        },
        decreaseMonsterHealth(state, payload) {
            if (!state.gameIsRunning) return;
            if (state.monsterHealth) {
                if (state.monsterHealth <= payload.value) {
                    state.monsterHealth = 0;
                } else {
                    state.monsterHealth -= payload.value;
                }
            }
        },
        saveTurn(state, payload) {
            state.turns.unshift(payload);
        },
        increasePlayerHealth(state, payload) {
            if (!state.gameIsRunning) return;
            if (state.playerHealth + payload.value > 100) {
                state.playerHealth = 100;
            } else {
                state.playerHealth += payload.value;
            }
        },
        decrementSpecialAttacks(state) {
            if (!state.gameIsRunning) return;
            state.specialAttacks--;
        },
        decrementHealthPotions(state) {
            if (!state.gameIsRunning) return;
            state.healthPotions--;
        },
        zeroPaymentHealth(state) {
            if (!state.gameIsRunning) return;
            state.playerHealth = 0;
        },
        playerWon(state) {
            state.playerWon = true;
        },
        playerLost(state) {
            state.playerWon = false;
        }

    },
    actions: {
        startGame({ commit }) {
            commit('resetGame');
            commit('startGame');
        },
        getRandomAttackValue({ state }, payload = { max: 10, min: 1}) {
            let max = payload.max ? payload.max : 10;
            let min = payload.min ? payload.min : 1;
            let randomAttack = Math.floor(Math.random() * (max - min + 1) + min);
            let attack = randomAttack;
            return attack;
        },
        attackMonster({dispatch, commit }, payload) {
            commit('decreaseMonsterHealth', { value: payload.value });
            commit('saveTurn', {
                isPlayer: true,
                value: payload.value
            });
        },
        normalAttackMonster({dispatch, commit }) {
            dispatch('getRandomAttackValue').then((attackValue) => {
                dispatch('attackMonster', { value: attackValue });
            });
        },
        attackPlayer({dispatch, commit }) {
            dispatch('getRandomAttackValue', { max: 15, min: 2 }).then((attackValue) => {
                commit('decreasePlayerHealth', { value: attackValue });
                commit('saveTurn', {
                    isPlayer: false,
                    value: attackValue
                });
            });
        },
        specialAttackMonster({state, dispatch, commit }) {
            dispatch('getRandomAttackValue', { min: 5 }).then((attackValue) => {
                dispatch('attackMonster', { value: attackValue * 2 }).then(() => {
                    commit('decrementSpecialAttacks');
                });
            });
        },
        healPlayer({state, dispatch, commit }) {
            if ( state.healthPotions <= 0 )
                return;
            commit('increasePlayerHealth', { value: 20 });
            commit('decrementHealthPotions');
        },
        giveUpPlayer({ dispatch, commit }) {
            commit('zeroPaymentHealth');
        }
    }
});

store.watch(
    state => state.playerHealth,
    (newHealth) => {
        if (newHealth <= 0) {
            store.commit('playerLost');
            store.commit('stopGame');
        }
    }
);

store.watch(
    state => state.monsterHealth,
    (newHealth) => {
        if (newHealth <= 0) {
            store.commit('playerWon');
            store.commit('stopGame');
        }
    }
);

var app = new Vue({
    el: "#app",
    store,
    data() {
        return {
            count: 1
        }
    },
    computed: {
        ...Vuex.mapState([
            'playerHealth',
            'monsterHealth',
            'specialAttacks',
            'healthPotions',
            'gameIsRunning',
            'turns',
            'playerWon',
        ]),
    },
    watch: {
        playerWon() {
            console.log('playerWon', this.playerWon)
        },
        // playerHealth() {
        //     console.log('vm player health changed');
        //     if(this.playerHealth <= 0) {
        //         console.log('player lost');
        //         this.$store.commit('stopGame');
        //     }
        // },
        // monsterHealth() {
        //     console.log('vm monster health changed');
        //     if(this.monsterHealth <= 0) {
        //         console.log('monster defeated');
        //         this.$store.commit('stopGame');
        //     }
        // },
    },
    created() {
        this.$store.commit('resetGame');
        // this.$store.watch(
        //     state => state.playerHealth,
        //     (oldHealth, newHealth) => {
        //         console.log('created watch, player health changed', oldHealth, newHealth);
        //         if(this.playerHealth <= 0) {
        //             console.log('player lost');
        //             this.commit('stopGame');
        //         }
        //     }
        // )
    },
    methods: {
        ...Vuex.mapActions([
            'startGame',
            'healPlayer',
            'giveUpPlayer'
        ]),
        attackMonster() {
            this.$store.dispatch('normalAttackMonster').then(() => {
                this.$store.dispatch('attackPlayer');
            });
        },
        specialAttackMonster() {
            if ( this.$store.state.specialAttacks <= 0 )
                return;
            this.$store.dispatch('specialAttackMonster').then(() => {
                this.$store.dispatch('attackPlayer');
            });
        },

    },
});