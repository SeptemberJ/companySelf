<template>
<div class="sider">
  <div class="siderBar">
    <b-list-group>
      <b-list-group-item @click="changeMenu(-1)">
        <img class="CursorPointer" style="width: 100px; height: 47px;" src="../../static/img/ZNKZLogo.png">
      </b-list-group-item>
      <b-list-group-item class="CursorPointer" v-for="(menu, idx) in menuList" :key="idx" @click="changeMenu(idx)">
        <img :src='menu.icon'>
        <p :class="{ 'active': idx == curMenuIdx}" style="font-size:14px">{{menu.fmenu}}</p>
      </b-list-group-item>
    </b-list-group>
  </div>
  <div class="overLay" v-if="showOverLay">
    <img class="CursorPointer" src="../../static/img/close.png" @click="hideOverLay">
    <b-row>
      <b-col xl="12">
        <b-list-group>
          <b-list-group-item>
            <h4 @click="toMenuIndex" class="CursorPointer">{{menuList[menuIndex].fmenu}}</h4>
          </b-list-group-item>
          <b-container fluid>
            <b-row>
                <b-col v-for="(sMenuArray, sIdxA) in menuList[menuIndex].smenu" :key="sIdxA">
                  <b-list-group-item class="CursorPointer" v-for="(sMenu, sIdx) in sMenuArray" :key="sIdx">
                    <span @click="chooseSecondMenu(sMenu)" style="font-size:14px">{{sMenu.second_name}}</span>
                  </b-list-group-item>
                </b-col>
            </b-row>
          </b-container>
        </b-list-group>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
  <!-- <div class="overLay" v-if="showOverLay">
    <img class="CursorPointer" src="../../static/img/close.png" @click="hideOverLay">
    <b-row>
      <b-col>
        <b-list-group>
          <b-list-group-item>
            <h4 @click="toMenuIndex" class="CursorPointer">{{menuList[menuIndex].fmenu}}</h4>
          </b-list-group-item>
          <b-list-group-item class="CursorPointer" v-for="(sMenu, sIdx) in menuList[menuIndex].smenu" :key="sIdx">
            <span @click="chooseSecondMenu(sMenu)" style="font-size:14px">{{sMenu.second_name}}</span>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div> -->
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
      menuList: state => state.menuList,
      app_URL: state => state.app_URL
    })
  },
  // creatrd: function () {
  //   this.getonelist()
  // },
  methods: {
    ...mapActions([
      'changeCurMenu',
      'changeSecondMenuItem'
    ]),
    changeMenu (idx) {
      this.changeCurMenu(idx)
      if (idx === -1) {
        this.$router.push({name: 'Internet'})
      } else {
        let Smenu = this.menuList[idx].smenu
        if (Smenu.length > 0) {
          this.showOverLay = true
          this.menuIndex = idx
        } else {
          this.$router.push({name: 'ERP'})
          this.showOverLay = false
        }
      }
    },
    changeMenu2 (idx) {
      if (idx === 0 || idx === 1) {
        this.showOverLay = true
        this.menuIndex = idx
      } else {
        this.showOverLay = false
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
          this.$router.push({name: 'Aboutztnet'})
          break
        default:
          this.$router.push({name: 'Internet'})
      }
    },
    toMenuIndex () {
      switch (this.menuIndex) {
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
          this.$router.push({name: 'Aboutztnet'})
          break
      }
      this.showOverLay = false
    },
    chooseSecondMenu (sMenu) {
      // this.$router.push({name: 'SecondMenuHtml', params: {id: sMenu}})
      // this.showOverLay = false
      this.changeSecondMenuItem(sMenu)
      this.$router.push({name: 'SecondMenuHtml', params: {id: sMenu}})
      this.showOverLay = false
      // this.ifShowsecondMenu = false
      // this.HeaderMenu = false
      // this.toggleSider()
    },

    hideOverLay () {
      this.showOverLay = false
    }
    // getonelist () {
    //   axios.get(this.$store.state.app_URL + 'ZwzOneList'
    //   ).then((res) => {
    //     this.$Message.success('success!')
    //   })
    // }
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
  background: #000;
  color: #fff;
  overflow-y: scroll;
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
