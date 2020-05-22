import Vue from 'vue'
import Vuex from '../mini-vuex/vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

const mutations = {
    increment(state, n = 1) {
        state.count += n
    }
}

const actions = {
    asyncIncrement({ commit, state }, payload) {
        setTimeout(() => {
            commit('increment', state.count + payload)
        }, 1000)
    }
}

const getters = {
    doubleCount(state) {
        return state.count * 2
    }
}

const account = {
    state: {
        num: 100
    },
    getters: {
        doubleNum(state) {
            return state.num * 2
        }
    }
}

const sign = {
    state: {
        check: true
    },
    modules: {
        log: {
            state: {
                str: 'log'
            }
        }
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: { account, sign }
})
