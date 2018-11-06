import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  curMenuIdx: 0,
  menuList: [
    {
      fmenu: '物联网场景应用',
      icon: '../../static/img/Icon/SmartHox_ApplicationScene_icon2.png',
      smenu: ['智能家居', '智能酒店', '智能环保', '智能工业', '智能校园']
    },
    {
      fmenu: '产品与服务',
      icon: '../../static/img/Icon/SmartHox_ApplicationScene_icon4.png',
      smenu: []
    },
    {
      fmenu: '适玩资讯',
      icon: '../../static/img/Icon/SmartHox_Products_icon1.png',
      smenu: []
    },
    {
      fmenu: '关于我们',
      icon: '../../static/img/Icon/SmartHox_Products_icon3.png',
      smenu: []
    }
  ]
}
// actions
const actions = {
  changeCurMenu ({commit, state}, ID) {
    commit('setCurMenu', ID)
  }
}

// mutations
const mutations = {
  setCurMenu (state, Idx) {
    state.curMenuIdx = Idx
  }
}

export default new Vuex.Store({
  state,
  modules: {
  },
  actions,
  mutations,
  strict: debug
})
