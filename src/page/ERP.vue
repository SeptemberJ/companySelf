<template>
  <div class="ERP">
    <section class="toastBlock" v-if="showToast">{{toastText}}</section>
    <section>
      <div class="topBlock" style="background: url(http://www.ik3cloud.com/images/index/bannerSemNew.png) center/cover no-repeat">
        <!-- <img src="http://www.ik3cloud.com/images/index/bannerSemNew.png" style="backgroundSize: cover"> -->
      </div>
      <div class="experienceBox">
        <h5>立即申请产品免费试用</h5>
        <b-form-input class="MarginT_20" v-model="name" type="text" placeholder="请输入用户名"></b-form-input>
        <b-form-input class="MarginT_20" v-model="phone" type="text" placeholder="请输入手机号"></b-form-input>
        <b-button class="MarginT_20" variant="primary" style="width:100%" @click="insert">立即使用</b-button>
        <p style="margin-top: 20px;font-size: 12px;text-align:center">致电专家，获取专属您企业的解决方案</p>
        <p><i class="fa fa-phone" style="margin-right: 10px;"></i>18717702993</p>
      </div>
    </section>
    <section class="MarginT_40">
      <h2 class="MarginT_20 MarginB_40">我们的产品</h2>
      <b-row class="justify-content-md-center">
        <b-col class="productionItem" cols="12" sm="3" xl="2" v-for="(production, idx) in productionList" :key="idx">
          <img class="MarginB_20" :src="production.img">
          <h5 class="MarginB_20">{{production.tit}}</h5>
          <section class="productionList">
            <p v-for="(item, idxs) in production.production" :key="idxs">{{item}}</p>
          </section>
          <b-button class="experienceBt" variant="warning" @click="showModal">立即体验</b-button>
        </b-col>
      </b-row>
    </section>
    <section class="MarginT_40" style="height: 150px;background: #0394FE url(http://www.ik3cloud.com/Images/Sem/sem_ad_background.png) center/cover no-repeat">
      <h2 style="height:150px;line-height:150px;color:#fff">万元级的投入，百万级的管理平台</h2>
    </section>
    <section class="MarginT_40">
      <h2 class="MarginT_20 MarginB_40">金蝶云 助力数字化转型</h2>
      <b-row style="width: 90%;margin:auto">
        <b-col cols="12" sm="6" v-for="(cloud, idx) in cloudList" :key="idx" class="MarginB_20">
          <img class="MarginB_20" :src="cloud.img">
          <h5>{{cloud.tit}}</h5>
          <p class="MarginB_20 padding_20">{{cloud.intro}}</p>
        </b-col>
      </b-row>
    </section>
    <section class="MarginT_40" style="height: 300px;background: #0394FE url(http://www.ik3cloud.com/Images/Sem/industry_back.png) center/cover no-repeat">
      <h2 style="height:150px;line-height:150px;color:#fff">在云端继续你的管理</h2>
      <P style="color:#fff">不管您处于什么行业，金蝶云定制多套解决方案，助您成功的数字化转型之旅</P>
    </section>
    <b-modal v-model="modalShow" hide-footer title="立即申请产品免费试用">
      <div style="width: 300px;margin:20px auto">
        <b-form-input class="MarginT_20 Padding_10" v-model="name" type="text" placeholder="请输入用户名"></b-form-input>
        <b-form-input class="MarginT_20 Padding_10" v-model="phone" type="text" placeholder="请输入手机号"></b-form-input>
      </div>
      <b-btn variant="primary" block @click="insert" style="width: 50%;margin: 40px auto 20px auto">立即体验</b-btn>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'ERP',
  data () {
    return {
      showToast: false,
      modalShow: false,
      toastText: '',
      name: '',
      phone: '',
      productionList: [
        {img: 'http://www.ik3cloud.com/Images/index/fin-static.png', tit: '财务云', intro: '全方位集团财务管控，智能记账，多维度精细化阿米巴核算', production: ['总账', '报表', '出纳管理']},
        {img: 'http://www.ik3cloud.com/Images/index/scm-static.png', tit: '供应链云', intro: '灵活可拓展的多组织协同业务，丰富的业务流程支撑', production: ['库存管理', '采购管理', '预算管理', '费用报销', '供应商协同']},
        {img: 'http://www.ik3cloud.com/Images/index/mfc-static.png', tit: '制造云', intro: '多组织计划/生产协同，智慧制造，全面的质量管理体系', production: ['生产管理', '计划管理', '智慧车间', '委外管理', '质量管理']},
        {img: 'http://www.ik3cloud.com/Images/index/ec-static.png', tit: '全渠道云', intro: '多级渠道管控，一站式多级订货，智慧门店管理', production: ['B2B电商', 'B2C电商', '返利管理', '全网会员', '促销管理']},
        {img: 'http://www.ik3cloud.com/Images/index/oa-static.png', tit: '移动办公云', intro: '个性工作台，高效审批，智能待办，一站式移动办公平台', production: ['业务监控', '掌上报销', '业务审批', '掌上资金']}
      ],
      cloudList: [
        {img: 'http://www.ik3cloud.com/Images/Sem/new_management.png', tit: '新管理', intro: '阿米巴落地神器。金蝶云多组织、多维度、多准则特性，助力企业实现阿米巴管理模式'},
        {img: 'http://www.ik3cloud.com/Images/Sem/new_sales.png', tit: '新营销', intro: '全渠道掌控法宝。金蝶云助力企业连接线上、线下、分销、直营、构建企业整合营销网络'},
        {img: 'http://www.ik3cloud.com/Images/Sem/new_manefacture.png', tit: '新制造', intro: '智能工厂管理奥义。金蝶云提供透明、柔性以及智能的制造解决方案'},
        {img: 'http://www.ik3cloud.com/Images/Sem/new_platform.png', tit: '新平台', intro: '随需应变必杀技。金蝶云支撑企业创新业务，快速构建业务应用，集成异构系统'}
      ]
    }
  },
  computed: {
    ...mapState({
      app_URL: state => state.app_URL
    })
  },
  created: function () {
  },
  watch: {
    modalShow: function (val) {
      if (!val) {
        this.name = ''
        this.phone = ''
      }
    }
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
      axios.post(this.app_URL + 'coustomerinsert', {fname: this.name, fmobile: this.phone, production: '云ERP'}
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

<style>
.ERP{
  position: relative;
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
.topBlock{
  width: 100%;
  height: 500px;
  position: relative;
  background: pink;
}
.experienceBox{
  width: 300px;
  height: 320px;
  padding: 20px 30px;
  position: absolute;
  top: 100px;
  right: 30px;
  background: #fff;
  border-radius: 10px;
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
.productionItem:hover .experienceBt{
  display: block !important;
}
.productionItem:hover .productionList{
  display: none !important;
}
/*.experienceBox H5:before{
  content:"—";
}
.experienceBox H5:after{
  content:"—";
}*/
</style>
