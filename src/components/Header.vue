<template>
  <div class="menu">
    <b-row style="width:98%;margin:0 auto;">
      <b-col cols="4" class="TextLeft">
        <i v-if="!HeaderMenu && !ifShowRightBlock" class="fa fa-bars CursorPointer" @click="toggleSider" style="font-size: 30px;margin-top: 10px;"></i>
        <i v-if="HeaderMenu && !ifShowRightBlock" class="fa fa-close CursorPointer" @click="toggleSider" style="font-size: 30px;margin-top: 10px;"></i>
      </b-col>
      <b-col cols="8" class="TextRight RightPC">
        <!-- <div class="SmallTit HoverTrigger">
          <span HoverTrigger>HoxCloud 登入<i class="fa fa-chevron-right" style="margin-top: 10px;margin-left:5px;"></i></span>
          <div class="HoverTargetBox">
            <span v-for="(web, idx) in zwzLinklist" :key="idx" @click="changeweb(web)">{{web.fname}}</span>
          </div>
        </div> -->
        <div class="SmallTit" style="display: inline-block;font-weight: 200;margin-left:20px;"><span><i class="fa fa-phone" style="margin-top: 10px;margin-right:5px;"></i>{{tel}}</span></div>
      </b-col>
      <!-- <b-col cols="8" class="TextRight RightMobile" @click="toggleRightBlock">
        <i v-if="!HeaderMenu && !ifShowRightBlock" class="fa fa-ellipsis-v CursorPointer" style="margin-top: 10px;margin-right:5px;font-size: 30px;"></i>
        <i v-if="!HeaderMenu && ifShowRightBlock" class="fa fa-close CursorPointer" style="margin-top: 10px;margin-right:5px;font-size: 30px;"></i>
      </b-col> -->
    </b-row>
    <!-- mobile -->
    <div v-if="HeaderMenu" class="headerMenu" style="background: #333 !important;">
      <b-nav vertical class="w-100">
        <div v-for="(menu, idx) in menuList" :key="idx">
          <b-nav-item style="height:50px;overflow:hidden;">
            <b-row>
              <b-col cols="8" class="TextLeft"><span @click="changeMenu(idx)">{{menu.fmenu}}</span></b-col>
              <b-col cols="4" class="TextRight" v-if="menuList[idx].smenu.length != 0" @click="toggleSecondMenu(idx)">
                <i v-if="menuIndex == idx && ifShowsecondMenu" class="fa fa-sort-up CursorPointer" style="margin-top: 10px;margin-right:5px;font-size: 30px;"></i>
                <i v-else class="fa fa-sort-desc CursorPointer" style="margin-top: 10px;margin-right:5px;font-size: 30px;"></i>
              </b-col>
            </b-row>
          </b-nav-item>
          <div v-if="menuIndex == idx && ifShowsecondMenu" class="secondMenu" style="margin-top:15px" >
            <div v-for="(sMenuArray, sIdxA) in menuList[idx].smenu" :key="sIdxA">
              <b-nav-item v-for="(sMenu, sIdx) in sMenuArray" :key="sIdx" class="secondname">
                <b-row style="padding-left: 30px;">
                  <b-col cols="12" class="TextLeft"><span @click="chooseSecondMenu(sMenu)" style="height:25px;line-height:25px;display:block;" class="secondname">{{sMenu.second_name}}</span></b-col>
                </b-row>
              </b-nav-item>
            </div>
          </div>
        </div>
        <div>
          <b-nav-item style="height:50px;overflow:hidden;">
            <b-row>
              <b-col cols="4" class="TextLeft"><span>客服电话</span></b-col>
              <b-col cols="8" class="TextRight">
                <a href="sms:18717702993"><span><i class="fa fa-phone" style="margin-top: 10px;margin-right:5px;"></i>{{tel}}</span></a>
              </b-col>
            </b-row>
          </b-nav-item>
        </div>
      </b-nav>
    </div>
    <!-- <div v-if="ifShowRightBlock" class="headerMenu" style="background: #333 !important;">
      <b-nav vertical class="w-100">
          <b-nav-item style="height:50px;line-height:50px;" v-for="(web, idx) in zwzLinklist" :key="idx">
            <b-row @click="changeweb(web)">
              <b-col cols="8" class="TextLeft"><span>{{web.fname}}</span></b-col>
              <b-col cols="4"  class="TextRight">
                <i class="fa fa-chevron-right CursorPointer"></i>
              </b-col>
            </b-row>
          </b-nav-item>
          <b-nav-item style="height:50px;line-height:50px;">
            <b-row>
              <b-col cols="6" class="TextLeft"><span>客服电话</span></b-col>
              <b-col cols="6"  class="TextRight">
                {{tel}}
              </b-col>
            </b-row>
          </b-nav-item>
      </b-nav>
    </div> -->
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import axios from 'axios'
export default {
  name: 'Header',
  data () {
    return {
      tel: '18717702993',
      HeaderMenu: false,
      ifShowsecondMenu: false,
      ifShowRightBlock: false,
      menuIndex: 0,
      zwzLinklist: [],
      showweb: false
    }
  },
  computed: {
    ...mapState({
      curMenuIdx: state => state.curMenuIdx,
      menuList: state => state.menuList,
      app_URL: state => state.app_URL
    })
  },
  created: function () {
    this.getList()
  },
  methods: {
    ...mapActions([
      'changeCurMenu',
      'changeSecondMenuItem'
    ]),
    changeshowweb () {
      if (this.showweb === false) {
        this.showweb = true
      } else {
        this.showweb = false
      }
    },
    toggleSider () {
      this.HeaderMenu = !this.HeaderMenu
      this.menuIndex = -1
    },
    toggleRightBlock () {
      this.ifShowRightBlock = !this.ifShowRightBlock
    },
    toggleSecondMenu (idx) {
      if (this.menuList[idx].smenu.length === 0) {
        this.ifShowsecondMenu = false
        this.changeMenu(idx)
        this.menuIndex = idx
        this.toggleSider()
      } else {
        // this.ifShowsecondMenu = !this.ifShowsecondMenu
        if (idx === this.menuIndex) {
          this.menuIndex = -1
          this.ifShowsecondMenu = false
        } else {
          if (!this.ifShowsecondMenu) {
            this.ifShowsecondMenu = !this.ifShowsecondMenu
          }
          this.menuIndex = idx
        }
      }
    },
    changeMenu (idx) {
      this.changeCurMenu(idx)
      if (idx === 0) {
        this.$router.push({name: 'Internet'})
      } else {
        let Smenu = this.menuList[idx].smenu
        if (Smenu.length > 0) {
          this.menuIndex = idx
        } else {
          this.$router.push({name: 'ERP'})
        }
      }
      this.HeaderMenu = false
    },
    // changeMenu2 (idx) {
    //   if (idx === 0) {
    //     this.showOverLay = true
    //     this.menuIndex = idx
    //   }
    //   this.changeCurMenu(idx)
    //   switch (idx) {
    //     case -1:
    //       this.$router.push({name: 'Internet'})
    //       break
    //     case 0:
    //       this.$router.push({name: 'Internet'})
    //       this.HeaderMenu = false
    //       break
    //     case 1:
    //       this.$router.push({name: 'Product'})
    //       this.HeaderMenu = false
    //       break
    //     case 2:
    //       this.$router.push({name: 'Article'})
    //       this.HeaderMenu = false
    //       break
    //     case 3:
    //       this.$router.push({name: 'Aboutztnet'})
    //       this.HeaderMenu = false
    //       break
    //     default:
    //       this.$router.push({name: 'Internet'})
    //       this.HeaderMenu = false
    //   }
    // },
    changeweb (web) {
      var address = web.faddress
      window.location.href = address
    },
    chooseSecondMenu (sMenu) {
      this.changeSecondMenuItem(sMenu)
      this.$router.push({name: 'SecondMenuHtml', params: {id: sMenu}})
      this.showOverLay = false
      this.ifShowsecondMenu = false
      this.HeaderMenu = false
      // this.toggleSider()
    },
    getList () {
      axios.get(this.app_URL + 'ZwzLink'
      ).then((res) => {
        if (res.data.code === 1) {
          this.zwzLinklist = res.data.zwzLinklist
        }
      })
    }
  }
}
</script>

<style scoped>
.menu{
  width: 100%;
  height: 50px;
  line-height: 50px;
  position: relative;
  top: 0px;
  background: #000;
  color: #fff;
}
/*.menu i{
  font-size: 22px;
  margin-top: 10px;
}*/
.bg-info{
  background: #000 !important;
}
.HoverTrigger{
  width: 200px;
  position: relative;
  display: inline-block;
}
.HoverTrigger:hover{
  cursor: pointer;
}
.HoverTrigger span{
  font-weight: 200;
}
.HoverTargetBox span{
  height: 30px;
  line-height: 30px;
  display: block;
  font-weight: 200;
}
.HoverTargetBox{
  position: absolute;
  width: 100%;
  border-radius: 5px;
  padding: 10px 10px;
  text-align: right;
  margin-top: 0px;
  background: #000;
  color: #fff;
  display: none;
  z-index: 1000000000000;
}
.HoverTargetBoxShow{
  position: absolute;
  width: 100%;
  border-radius: 5px;
  padding: 10px 10px;
  text-align: right;
  margin-top: 2px;
  background: #000;
  color: #fff;
}
.HoverTrigger:hover .HoverTargetBox{
  display: block;
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
  height: 100%;
  color: #fff;
}
/* .nav-item:hover{
  background: #000;
} */
.secondname:hover {
  color:#1296db;
}
.webitem {
  height: 45px;
  line-height: 45px
  /* padding-top:10px;
  margin-top:10px */
}
.webitem:hover {
   background: #333;
   color:#1296db;
}
.showweb:hover {
   color:#1296db;
}
.secondMenu .nav-item a{
  color: #ccc;
}
.pushicon{
  width: 20px;
  height: 20px;
  display: inline-block;
}
.pushicon1{
  width: 15px;
  height: 15px
}
.RightPC{
  display: none;
}
.RightMobile{
  display: block;
}
@media (min-width: 768px) {
  .RightMobile{
    display: none;
  }
  .RightPC{
    display: block;
  }
  .headerMenu{
    display: none;
  }
  .searchBox{
    display: block;
  }
}
</style>
