<template>
  <div class="SecondMenuHtml" style="width:100%">
    <div class="LineBlock"></div>
    <div class="bgBlock">
      <img v-if="secondMenuItem.image" :src="imgPre + secondMenuItem.image" style="backgroundSize: contain">
      <!-- <div  class="TopImg" style="position:relative;" :style="{backgroundImage: 'url(http://www.smart-hox.com:8081/upFiles/' + secondMenuItem.image + ')', backgroundPosition:'center center', backgroundRepeat:'no-repeat',backgroundSize:'contain'}"> -->
     <!-- <div  class="TopImg" style="position:relative;" :style="{backgroundImage: 'url(http://www.smart-hox.com:8081/upFiles/' + secondMenuItem.image + ')', backgroundPosition:'center center', backgroundRepeat:'no-repeat',backgroundSize:'cover'}"> -->
      <!-- <div style="position:absolute;padding-left:40px;text-align:left;color:#fff;margin-top:80px;width:100%">
      </div> -->
    </div>
    <div style="width:90%;min-height:10px;padding-top:30px;margin:auto;text-align:left !important">
      <div class="SecondMenuMainContentBox"></div>
      <div v-html="secondMenuItem.second_content"></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'SecondMenuHtml',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      secondMenuItem: state => state.secondMenuItem,
      imgPre: state => state.imgPre
    })
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped>
.mudleImg{
  width:100%;
  height:240px;
}
.title{
  width:100%;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
  color: rgb(192, 80, 77);
}
.bgBlock{
  width: 100%;
  position: relative;
}
.bgBlock img{
  position:relative;
  top:-30px;
  bottom:0;
  left:0;
  right:0;
  width:100%;
  margin:auto;
  z-index: -1;
  *zoom:1;
  display: block;
}
/*.TopImg{
  width:100% !important;
  height:500px;
}*/
.bgBlock:before {
  content: "";
  display: inline-block;
  padding-bottom: 0%;
  width: 0.1px; /*必须要有数值，否则无法把高度撑起来*/
  vertical-align: middle;
}
</style>
