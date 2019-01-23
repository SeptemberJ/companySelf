import Vue from 'vue'
import Vuex from 'vuex'
import vuexAlong from 'vuex-along'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

const state = {
  app_URL: 'http://www.smart-hox.com:8081/hoxJK/',
  imgPre: 'http://www.smart-hox.com:8081/upFiles/',
  // app_URL: 'http://shkingdee-soft.com/hoxJK/',
  // imgPre: 'http://shkingdee-soft.com/upFiles/',
  curMenuIdx: 0,
  menuList: [],
  secondMenuItem: []
}
// actions
const actions = {
  changeCurMenu ({commit, state}, ID) {
    commit('setCurMenu', ID)
  },
  changemenuList ({commit, state}, menuList) {
    commit('setmenuList', menuList)
  },
  changeSecondMenuItem ({commit, state}, item) {
    commit('SecondMenuItem', item)
  }
}

// mutations
const mutations = {
  setCurMenu (state, Idx) {
    state.curMenuIdx = Idx
  },
  setmenuList (state, menuList) {
    state.menuList = menuList
  },
  SecondMenuItem (state, item) {
    state.secondMenuItem = item
  }
}

export default new Vuex.Store({
  state,
  modules: {
  },
  actions,
  mutations,
  // strict: debug,
  plugins: [vuexAlong]
})
