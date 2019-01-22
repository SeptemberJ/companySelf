<template>
<div class="Internet">
  <div class="LineBlock"></div>
  <div class="par parsys">
    <div class="heroCarousel section">
      <div class="herocarouseltransitionValue" transitionvalue="5"></div>
      <div class="herocarouseltransitionOffOn" transitionoffon="transitionOn"></div>
      <div class="homeBanner section-custom full-width">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="owl-container">
                <section class="note-overlay">
                  <i></i>
                </section>
                <div id="heroBanner" class="owl-carousel owl-theme" style="opacity: 1; display: block;">
                  <div class="owl-wrapper-outer">
                    <div class="owl-wrapper" style="left: 0px; display: block;">
                      <div v-if="CurCarousel == Idx" class="owl-item active" style="width: 100%;height: 100%;" v-for="(Carousel,Idx) in CarouselList" :key="Idx">
                        <div class="heroCarouselTabs1 heroCarouselTabs">
                          <div class="item" style="width:100%,">
                            <b-jumbotron class="CarouselBox" header="" lead="" :style="{backgroundImage: 'url(' + imgPre + Carousel.carousel_big_pic + ')',backgroundRepeat:'no-repeat', backgroundPosition:'center center',backgroundSize:'cover'}">
                              <h2>{{Carousel.carousel_title}}</h2>
                              <div v-html="Carousel.carousel_content"></div>
                              <!-- <b-btn variant="primary" href="#">More Info</b-btn> -->
                            </b-jumbotron>
                            <!-- <div class="item-img lazyOwl" title="物流管理平台" data-icon="fa fa-cubes" :style="{display: 'inline-block',backgroundImage: 'url(' + Carousel.img + ')'}"></div>
                            <div class="l2_banner_content">
                              <h2 class="colorWhite">{{Carousel.tit_b}}</h2>
                              <p>{{Carousel.tit_s}}</p>
                              <p>{{Carousel.content}}</p>
                            </div> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-controls clickable" style="bottom: 58px;">
                    <div class="owl-pagination">
                      <div v-for="(Carousel,Idx) in CarouselList" :key="Idx" :class="{ 'active': CurCarousel == Idx,'owl-page downpage CursorPointer':true}"  @click="ChangeCurCarousel(Idx)">
                        <div style="width:100%;text-align:center">
                          <span><img style="width:40px;height:40px;display:inline" :src="imgPre + Carousel.carousel_icon"><div style="height: 40px;padding:0 20px;text-align:center;display:inline">{{Carousel.carousel_name}}</div></span>
                        </div>
                      </div>
                    </div>
                    <div class="owl-buttons">
                      <div class="owl-prev" @click="PreCurCarousel"><i class="fa fa-angle-left"></i></div>
                      <div class="owl-next" @click="NextCurCarousel"><i class="fa fa-angle-right"></i></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="LineBlock"></div>
  <!--  -->
  <div style="text-align: left;padding: 40px 40px;">
    <h3 class="MarginB_40"><b>平台架构</b></h3>
    <img class="TextCenter" src="http://www.inodes.cn/images/product/cloud/device-cloud-sys.png">
  </div>
  <div style="text-align: left;padding: 40px 40px;">
    <h4 class="MarginB_40"><b>接入优势</b></h4>
    <b-row>
      <b-col cols="12" sm="6" md="6" v-for="(strength, idx) in strengthList" :key="idx" class="MarginB_20" style="border-left: 2px solid #1296db">
        <p class="SmallTit" style="font-size:16px"><i :class="strength.icon" style="margin-right: 10px;"></i>{{strength.tit}}</p>
        <p class="smallSize" style="font-size:14px">{{strength.con}}</p>
      </b-col>
    </b-row>
  </div>
  <div style="text-align: left;padding: 40px 40px;">
    <h3 class="MarginB_40"><b>接入服务</b></h3>
    <b-row>
      <b-col cols="12" sm="6" md="6" class="MarginB_20" style="border-left: 2px solid #1296db">
        <p class="SmallTit" style="font-size:16px">标准化产品接入</p>
        <p class="smallSize" style="font-size:14px">模块+公有云+APP —— 标准化产品接入，稳定、快速、低成本部署物联网。 </p>
        <p class="smallSize" style="font-size:14px">标准UI设计 | 兼容多种模块 | 标准硬件协议 | 公有云</p>
      </b-col>
      <b-col cols="12" sm="6" md="6" class="MarginB_20" style="border-left: 2px solid #1296db">
        <p class="SmallTit" style="font-size:16px">自定义产品接入</p>
        <p class="smallSize" style="font-size:14px">定制APP+私有云+SaaS平台 ——高效接入、完全自定义，数据库独立安全，稳定的平台架构，积累数据资产。</p>
        <p class="smallSize" style="font-size:14px">架构稳定 | 独立数据库 | 按需调用数据 | 协议定制 | 自动化运维</p>
      </b-col>
    </b-row>
  </div>
  <div style="text-align: left;padding: 40px 40px;">
    <h3 class="MarginB_40"><b>开发接入流程</b></h3>
    <img class="TextCenter" src="http://www.inodes.cn/images/product/cloud/apply-step.png">
  </div>
  <div style="text-align: left;padding: 40px 40px;">
    <h3 class="MarginB_40"><b>应用场景</b></h3>
    <b-row>
      <b-col class="MarginB_20" cols="12" sm="4" md="4" v-for="(Case, idx) in caseList" :key="idx">
        <div class="caseWrap">
          <img class="hoverImg" :src="Case.img">
          <div class="hoverMask">
            <h2 class="project-title">{{Case.tit}}</h2>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
  <!-- <div style="text-align: left;padding: 40px 40px;">
    <h4 class="MarginB_20">{{ZwzOnelist.centre_name}}</h4>
    <p class="MarginB_20">{{ZwzOnelist.centre_content}}</p>
    <b-row>
      <b-col cols="12" sm="6" md="6" lg="3">
        <img class="mudleImg" :src="imgPre + ZwzOnelist.centre_icon1_pic">
        <p class="SmallTit" style="font-size:16px">{{ZwzOnelist.centre_icon1_name}}</p>
        <p class="smallSize" style="font-size:14px">{{ZwzOnelist.centre_icon1_introduce}}</p>
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3">
        <img class="mudleImg" :src="imgPre + ZwzOnelist.centre_icon2_pic">
        <p class="SmallTit" style="font-size:16px">{{ZwzOnelist.centre_icon2_name}}</p>
        <p class="smallSize" style="font-size:14px">{{ZwzOnelist.centre_icon2_introduce}}</p>
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3">
        <img class="mudleImg" :src="imgPre + ZwzOnelist.centre_icon3_pic">
        <p class="SmallTit" style="font-size:16px">{{ZwzOnelist.centre_icon3_name}}</p>
        <p class="smallSize" style="font-size:14px">{{ZwzOnelist.centre_icon3_introduce}}</p>
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3">
        <img class="mudleImg" :src="imgPre + ZwzOnelist.centre_icon4_pic">
        <p class="SmallTit" style="font-size:16px">{{ZwzOnelist.centre_icon4_name}}</p>
        <p class="smallSize" style="font-size:14px">{{ZwzOnelist.centre_icon4_introduce}}</p>
      </b-col>
    </b-row>
  </div> -->
</div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      slide: 0,
      sliding: null,
      CurCarousel: 0,
      CarouselList: [],
      ZwzOnelist: [],
      obj: {},
      strengthList: [
        {icon: 'fa fa-rmb', tit: '低成本快速接入', con: '无需投入巨大精力构架复杂的网络架构，可在最短一周内进行对接成功接入先进的物联网云平台，降低研发投入、云端部署及运维成本'},
        {icon: 'fa fa-file-code-o', tit: '兼容多协议', con: '平台支持不同的终端接入，通信协议支持MQTT、WebScoket、Http等，平台提供RESTFUL API，支持第三方业务应用系统的接入'},
        {icon: 'fa fa-database', tit: '高并发量', con: '高度扩展的平台架构支持从几万到几百万的设备并发连接，采用分布式的NOSQL数据库，支持海量级别的数据存储'},
        {icon: 'fa fa-area-chart', tit: '大数据分析', con: '每天自动备份数据，数据分析，并使用可视化、易用的数据分析界面定制数据报告'},
        {icon: 'fa fa-eye', tit: '可视化运维管理', con: '设置产品生命周期管理、设备管理日志、消息分发推送、远程监控 、数据分析等多维度运营能力'},
        {icon: 'fa fa-thumbs-up', tit: '安全可靠', con: '监控系统7*24小时 不间断服务，所有的设备数据和用户数据都采 用加密传输、细化的权限管理、管理员和普通用户权限清晰，实现数据的安全存储和访问'}
      ],
      caseList: [
        {icon: 'fa fa-area-chart', img: 'http://www.inodes.cn/images/product/cloud/use01.jpg', tit: '净水'},
        {icon: 'fa fa-close CursorPointer', img: 'http://www.inodes.cn/images/product/cloud/use02.jpg', tit: '自动售卖'},
        {icon: 'fa fa-close CursorPointer', img: 'http://www.inodes.cn/images/product/cloud/use03.jpg', tit: '家庭智能'},
        {icon: 'fa fa-close CursorPointer', img: 'http://www.inodes.cn/images/product/cloud/use04.jpg', tit: '健身'},
        {icon: 'fa fa-close CursorPointer', img: 'http://www.inodes.cn/images/product/cloud/use05.jpg', tit: '工业物联'},
        {icon: 'fa fa-close CursorPointer', img: 'http://www.inodes.cn/images/product/cloud/use06.jpg', tit: '新能源'}
      ]
    }
  },
  computed: {
    ...mapState({
      app_URL: state => state.app_URL,
      menuList: state => state.menuList,
      imgPre: state => state.imgPre
    })
  },
  created: function () {
    axios.get(this.app_URL + 'ZwzOneList'
    ).then((_res) => {
      if (_res.data.code === 1) {
        this.getCarouselList(_res.data.ZwzOnelist[0].id)
        this.ZwzOnelist = _res.data.ZwzOnelist[0]
      }
    })
    setInterval(() => {
      this.NextCurCarousel()
    }, 5000)
  },
  methods: {
    ChangeCurCarousel (Idx) {
      this.CurCarousel = Idx
    },
    PreCurCarousel () {
      if (this.CurCarousel > 0) {
        this.CurCarousel -= 1
      } else {
        this.CurCarousel = (this.CarouselList.length - 1)
      }
    },
    NextCurCarousel () {
      if (this.CurCarousel < (this.CarouselList.length - 1)) {
        this.CurCarousel += 1
      } else {
        this.CurCarousel = 0
      }
    },
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    getCarouselList (ID) {
      axios.get(this.app_URL + 'zwzonecarouselList?one_id=' + ID
      ).then((res) => {
        if (res.data.code === 1) {
          this.CarouselList = res.data.zwzonecarouselList
        }
      })
    }
  }
}
</script>

<style scoped>
.jumbotron{
  border-radius: 0 !important;
  margin-bottom: 0 !important;
  text-align: left;
  padding-right: 25%;
}
.CarouselBox{
  height: 700px;
  color: #fff;
  padding-left: 40px;
}
.CarouselBox h2, .CarouselBox p{
  margin-bottom: 40px;
}
@media (max-width: 640px){
  .CarouselBox{
    height: 475px;
    color: #fff;
  }
  .CarouselBox h2{
    margin-bottom: 20px;
  }
  .CarouselBox p{
    margin-bottom: 20px;
  }
}
@media (max-width: 360px){
  .CarouselBox h2{
    margin-bottom: 10px;
  }
  .CarouselBox p{
    margin-bottom: 10px;
  }
}
.section-custom{
  margin: 0px !important;
}
.container-fluid {
  width: 100%;
  padding-right: 0px !important;
  padding-left: 0px !important;
}
#heroBanner .l2_banner_content h2{
  color: #fff;
}
.owl-container .l2_banner_content{
  text-align: left;
}
.mudleImg{
  width: 60%;
  margin: 10px auto;
}
/*hover*/
.caseWrap{
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
}
.caseWrap:hover .hoverImg{
  transform: scale(1.5);
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.caseWrap:hover .hoverMask{
  opacity: .6;
  -webkit-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.hoverMask{
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-title{
  color: #fff;
}
</style>
