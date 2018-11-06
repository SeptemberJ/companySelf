<template>
<div>
  <div class="menu">
    <b-navbar toggleable="md" type="dark" variant="info" fixed="top">
      <span @click="toggleSider"><b-navbar-toggle target="nav_collapse"></b-navbar-toggle></span>
      <b-navbar-brand href="#" style="color: #000;">NavBar</b-navbar-brand>
     <!--  <b-navbar-nav class="ml-auto"> -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" style="color: #fff;font-size: 12px;padding-right: 20px;">HoxCloud 登入</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="searchBox">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
    <div v-if="HeaderMenu" class="headerMenu" style="background: #333 !important;">
      <b-nav vertical class="w-100">
        <b-nav-item>
          <b-input-group style="padding-top: 10px;">
            <b-form-input placeholder="Search"></b-form-input>
            <b-input-group-append>
              <b-btn type="submit">Search</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-nav-item>
        <div v-for="(menu, idx) in menuList" :key="idx">
          <b-nav-item active @click="toggleSecondMenu(idx)">{{menu.fmenu}}</b-nav-item>
          <div v-if="menuIndex == idx && ifShowsecondMenu" class="secondMenu">
            <b-nav-item v-for="(sMenu, sIdx) in menuList[idx].smenu" :key="sIdx"><span @click="chooseSecondMenu(sMenu)">{{sMenu}}</span></b-nav-item>
          </div>
        </div>
        <!-- <b-nav-item active @click="toggleSecondMenu">物联网场景应用</b-nav-item>
        <div v-if="secondMenu" class="secondMenu">
          <b-nav-item>智能家居</b-nav-item>
          <b-nav-item>智能酒店</b-nav-item>
          <b-nav-item>智能环保</b-nav-item>
          <b-nav-item>智能工业</b-nav-item>
          <b-nav-item>智能校园</b-nav-item>
        </div>
        <b-nav-item>产品与服务</b-nav-item>
        <b-nav-item>适玩资讯</b-nav-item> -->
      </b-nav>
    </div>
  </div>
</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      HeaderMenu: false,
      ifShowsecondMenu: false,
      menuIndex: 0
    }
  },
  computed: {
    ...mapState({
      curMenuIdx: state => state.curMenuIdx,
      menuList: state => state.menuList
    })
  },
  methods: {
    ...mapActions([
      'changeCurMenu'
    ]),
    toggleSider () {
      this.HeaderMenu = !this.HeaderMenu
    },
    toggleSecondMenu (idx) {
      if (this.menuList[idx].smenu.length == 0) {
        this.ifShowsecondMenu = false
        this.changeMenu(idx)
        this.menuIndex = idx
        this.toggleSider()
      } else {
        this.ifShowsecondMenu = !this.ifShowsecondMenu
        this.menuIndex = idx
      }
    },
    changeMenu (idx) {
      if (idx === 0) {
        this.showOverLay = true
        this.menuIndex = idx
      }
      this.changeCurMenu(idx)
      switch (idx) {
        case -1:
          this.$router.push({name: 'Internet'})
          break
        case 0:
          this.$router.push({name: 'Internet'})
          break
        case 1:
          this.$router.push({name: 'Product'})
          break
        case 2:
          this.$router.push({name: 'Article'})
          break
        case 3:
          this.$router.push({name: 'AboutUs'})
          break
        default:
          this.$router.push({name: 'Internet'})
      }
    },
    chooseSecondMenu (sMenu) {
      this.$router.push({name: 'SecondMenuHtml', params: {id: sMenu}})
      this.showOverLay = false
      this.ifShowsecondMenu = false
      this.toggleSider()
    }
  }
}
</script>

<style scoped>
.menu{
  position: relative;
}
.bg-info{
  background: #000 !important;
}
.headerMenu {
  width: 100%;
  height: 100vh;
  display: block;
  position: fixed;
  left: 0px;
  top: 50px;
  z-index: 999;
}
.searchBox{
  display: none;
}
.nav-item a{
  color: #fff;
}
.nav-item:hover{
  background: #000;
}
.secondMenu .nav-item a{
  color: #ccc;
}
@media (min-width: 768px) {
  .headerMenu{
    display: none;
  }
  .searchBox{
    display: block;
  }
}
</style>
