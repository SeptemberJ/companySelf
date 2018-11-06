<template>
<div class="sider">
  <div class="siderBar">
    <b-list-group>
      <b-list-group-item @click="changeMenu(-1)">
        <img class="CursorPointer" style="width: 100px; height: 47px;" src="../../static/img/Logo.png">
      </b-list-group-item>
      <b-list-group-item class="CursorPointer" v-for="(menu, idx) in menuList" :key="idx" @click="changeMenu(idx)">
        <img :src='menu.icon'>
        <p :class="{ 'active': idx == curMenuIdx}">{{menu.fmenu}}</p>
      </b-list-group-item>
    </b-list-group>
  </div>
  <div class="overLay" v-if="showOverLay">
    <img class="CursorPointer" src="../../static/img/back.png" @click="hideOverLay">
    <b-row>
      <b-col>
        <b-list-group>
          <b-list-group-item>
            <h4>{{menuList[menuIndex].fmenu}}</h4>
          </b-list-group-item>
          <b-list-group-item class="CursorPointer" v-for="(sMenu, sIdx) in menuList[menuIndex].smenu" :key="sIdx">
            <span @click="chooseSecondMenu(sMenu)">{{sMenu}}</span>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'SiderBar',
  data () {
    return {
      showOverLay: false,
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
    },
    hideOverLay () {
      this.showOverLay = false
    }
  }
}
</script>

<style scoped>
.sider{
  display: none;
}
.list-group-item{
  background: transparent !important;
  border: 0px !important;
}
.list-group-item img{
  width: 30px;
  height: 30px;
  margin: 5px auto;
  display: block;
}
.list-group-item p{
  font-size: 12px;
}
.siderBar{
  width: 130px;
  height: calc(100vh + 80px);
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 999999;
  background: #eee;
  display: block;
}
.active{
  color: #1296db;
  font-weight: bold;
}
.overLay{
  width: 100%;
  padding: 40px 20px;
  height: calc(100vh + 80px);
  position: fixed;
  top: 0px;
  left: 130px;
  z-index: 999999;
  background: rgb(0, 0, 0, .9);
  color: #fff;
  /*background: rgb(41, 36, 33, .9);*/
}
.overLay img{
  width: 30px;
  height: 30px;
  display: block;
}
.overLay .list-group-item{
  text-align: left;
  font-size: 12px;
  padding-left: 40px;
}
@media (min-width: 768px) {
  .sider{
    display: block;
  }
}
</style>
