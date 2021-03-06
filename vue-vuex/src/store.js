import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // store에서 state는 data 역할을 한다.
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ]
  },
  getters: { // store에서 getters는 computed 역할
    // allUsersCount: function(state) {
    allUsersCount: state => {
      return state.allUsers.length
    },
    countOfSeoul: state => {
      let count = 0
      state.allUsers.forEach(user => {
        if(user.address === 'Seoul') count++
      })
      return count
    },
    percentOfSeoul: (state, getters) => {
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100)
    }
  },
  mutations: { // 변이를 뜻하는 mutation은 store애서 state 값을 바꿀 때 사용
    addUsers: (state, payload) => {
      state.allUsers.push(payload)
    }
  },
  actions: { // mutations의 값을 바꿀 때 사용
    addUsers: context => {
      context.commit('addUsers')
    },
    addUsers2: ({ commit }, payload) => {
      // 위의 commit은 실제로는 { context, commit }
      commit('addUsers', payload)
    }
  }
})
