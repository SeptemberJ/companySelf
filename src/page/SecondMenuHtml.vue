<template>
  <div class="SecondMenuHtml" style="width:100%">
    <div class="LineBlock"></div>
    <section class="toastBlock" v-if="showToast">{{toastText}}</section>
    <b-row class="topModule" style="diplay:blcok;background:#efefef" v-if="curMenuIdx == 0">
        <b-col md="6" lg="5" xl="4">
          <div class="experienceBoxProduction">
            <div class="experienceBoxBlock">
              <h5>立即申请产品免费试用</h5>
              <b-form-input class="MarginT_20" v-model="name" type="text" placeholder="请输入姓名" size="sm"></b-form-input>
              <b-form-input class="MarginT_20" v-model="phone" type="text" placeholder="请输入手机号" size="sm"></b-form-input>
              <b-button class="MarginT_20" variant="primary" style="width:100%" size="sm" @click="insert">立即使用</b-button>
              <p style="margin-top: 10px;font-size: 12px;text-align:center">致电专家，获取专属您企业的解决方案</p>
              <p><i class="fa fa-phone" style="margin-right: 10px;"></i>18717702993</p>
            </div>
          </div>
          <b-button class="experienceBtSimple" variant="primary" size="sm" @click="showModal">立即申请免费体验</b-button>
        </b-col>
        <b-col md="6"  lg="7" xl="8" class="rightServiceText">
          <div>
            <h3 style="color:#1296db;font-weight:bold;">ZTNET 为您服务</h3>
            <p style="color:#969696;">本公司特色：物联网定制开发、无车承云平台、<br/> 金蝶云星空、管理系统咨询与定制开发、APP开发</p>
          </div>
        </b-col>
    </b-row>
    <!-- <section style="width:100%;height:500px;position:relative;overflow:hidden" v-if="secondMenuItem.image">
      <div class="topBlock" :style="{backgroundImage: 'url(' + imgPre + secondMenuItem.image + ')'}">
      </div>
      <div class="experienceBox">
        <div class="experienceBoxBlock">
          <h5>立即申请产品免费试用</h5>
          <b-form-input class="MarginT_20" v-model="name" type="text" placeholder="请输入用户名" size="sm"></b-form-input>
          <b-form-input class="MarginT_20" v-model="phone" type="text" placeholder="请输入手机号" size="sm"></b-form-input>
          <b-button class="MarginT_20" variant="primary" style="width:100%" size="sm" @click="insert">立即使用</b-button>
          <p style="margin-top: 10px;font-size: 12px;text-align:center">致电专家，获取专属您企业的解决方案</p>
          <p><i class="fa fa-phone" style="margin-right: 10px;"></i>18717702993</p>
        </div>
      </div>
    </section> -->
    <!-- <section style="width:100%;position:relative;overflow:hidden">
      <div class="bgBlock">
        <img :src="imgPre + secondMenuItem.image">
        <div class="experienceBoxBlock">
          <h5>立即申请产品免费试用</h5>
          <b-form-input class="MarginT_20" v-model="name" type="text" placeholder="请输入用户名" size="sm"></b-form-input>
          <b-form-input class="MarginT_20" v-model="phone" type="text" placeholder="请输入手机号" size="sm"></b-form-input>
          <b-button class="MarginT_20" variant="primary" style="width:100%" size="sm" @click="insert">立即使用</b-button>
          <p style="margin-top: 10px;font-size: 12px;text-align:center">致电专家，获取专属您企业的解决方案</p>
          <p><i class="fa fa-phone" style="margin-right: 10px;"></i>18717702993</p>
        </div>
      </div>
    </section> -->
    <div class="bgBlock" v-if="curMenuIdx != 0">
      <img v-if="secondMenuItem.image" :src="imgPre + secondMenuItem.image" style="backgroundSize: contain">
    </div>
    <div style="width:90%;min-height:10px;padding-top:30px;margin:auto;text-align:left !important">
      <div class="SecondMenuMainContentBox"></div>
      <div v-html="secondMenuItem.second_content"></div>
    </div>
    <b-modal v-model="modalShow" hide-footer title="立即申请产品免费试用">
      <div style="width: 300px;margin:20px auto">
        <b-form-input class="MarginT_20 Padding_10" v-model="name" type="text" placeholder="请输入用户名"></b-form-input>
        <b-form-input class="MarginT_20 Padding_10" v-model="phone" type="text" placeholder="请输入手机号"></b-form-input>
      </div>
      <b-btn variant="primary" block @click="insert" style="width: 50%;margin: 40px auto 20px auto">立即体验</b-btn>
      <p style="margin-top: 20px;font-size: 12px;text-align:center">致电专家，获取专属您企业的解决方案</p>
      <p><i class="fa fa-phone" style="margin-right: 10px;"></i>18717702993</p>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'SecondMenuHtml',
  data () {
    return {
      modalShow: false,
      showToast: false,
      toastText: '',
      name: '',
      phone: ''
    }
  },
  computed: {
    ...mapState({
      secondMenuItem: state => state.secondMenuItem,
      curMenuIdx: state => state.curMenuIdx,
      imgPre: state => state.imgPre,
      app_URL: state => state.app_URL
    })
  },
  created () {
  },
  methods: {
    showModal () {
      this.modalShow = true
    },
    insert (ID) {
      if (this.name === '' || this.phone === '') {
        this.showToast = true
        this.toastText = '请输入姓名和手机号！'
        setTimeout(() => {
          this.showToast = false
        }, 1500)
        return false
      }
      axios.post(this.app_URL + 'coustomerinsert', {fname: this.name, fmobile: this.phone, production: this.secondMenuItem.second_name}
      ).then((res) => {
        if (res.data.code === 0) {
          this.toastText = '申请成功，我们将尽快与您联系！'
          this.modalShow = false
          this.showToast = true
          this.name = ''
          this.phone = ''
          setTimeout(() => {
            this.showToast = false
          }, 3000)
        }
      })
    }
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
  overflow: hidden;
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
.bgBlock:before {
  content: "";
  display: inline-block;
  padding-bottom: 0%;
  width: 0.1px; /*必须要有数值，否则无法把高度撑起来*/
  vertical-align: middle;
}
.toastBlock{
  width: 300px;
  height: 50px;
  line-height: 50px;
  background: #000;
  color: #fff;
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
}
.topModule{
  height: 350px;
}
.topBlock{
  width: 100%;
  height: 350px;
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  position: relative;
}
.experienceBoxProduction{
  width: 280px;
  height: 300px;
  padding: 20px 20px;
  /*
  position: absolute;
  top: 15px;
  left: 30px;*/
  margin: 15px auto;
  background: #fff;
  border-radius: 10px;
  display: block;
}
.experienceBtSimple{
  display: none;
}
.rightServiceText{
  text-align: left;
  padding-top: 100px;
  padding-left: 40px;
}
@media (max-width: 769px) {
  .experienceBoxProduction{
    height: 100px;
    display: none;
  }
  .experienceBtSimple{
    margin: 20px auto;
    display: block;
  }
  .rightServiceText{
    padding-top: 20px;
  }
  .topModule{
    height: auto;
  }
}
@media (max-width: 414px) {
  .rightServiceText{
    text-align: center;
    padding-top: 20px;
    padding-left: 0px;
  }
}

.productionItem{
  padding: 20px 0;
}
.productionItem:hover{
  border: 1px solid #e0a800;
}
.experienceBt{
  display: none !important;
  margin: 40px auto 0 auto;
  width: 100px;
  border-radius: 50px !important;
  font-size: 16px;
}
</style>
