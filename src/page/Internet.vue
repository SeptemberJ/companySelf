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
                          <div class="item" style="position:relative;">
                            <b-jumbotron class="CarouselBox" header="" lead="" style="backgroundImage: url('static/img/Banner/SmartHox_banner1.png')">
                              <h2>{{Carousel.tit_b}}</h2>
                              <p>{{Carousel.content}}</p>
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
                        <span class=""><i :class="Carousel.tab_icon"></i><p style="height: 40px;">{{Carousel.tab_tit}}</p></span>
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
  <div style="text-align: left;padding: 40px 40px;">
    <h4 class="MarginB_20">物联网一站式纵向服</h4>
    <p class="MarginB_20">SmartHox作为物联网行业极具创新能力的IoT云平台,为企业提供进入物联网必需的设备接入、设备控制、数据分析、供应链资源一站式服务,助力企业智造转型,并为其在物联网时代打造新商业模式。</p>
    <b-row>
      <b-col cols="12" sm="6" md="6" lg="3">
        <img class="mudleImg" src="../../static/img/Icon/SmartHox_home_icon5.png">
        <p class="SmallTit">构建设备</p>
        <p class="smallSize">物联网(IoT)始于“物”（即设备）。构建您的设备（从添加传感器到创建智能设备），才能启动您的IoT解决方案。</p>
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3">
        <img class="mudleImg" src="../../static/img/Icon/SmartHox_home_icon5.png">
        <p class="SmallTit">构建设备</p>
        <p class="smallSize">物联网(IoT)始于“物”（即设备）。构建您的设备（从添加传感器到创建智能设备），才能启动您的IoT解决方案。</p>
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3">
        <img class="mudleImg" src="../../static/img/Icon/SmartHox_home_icon5.png">
        <p class="SmallTit">构建设备</p>
        <p class="smallSize">物联网(IoT)始于“物”（即设备）。构建您的设备（从添加传感器到创建智能设备），才能启动您的IoT解决方案。</p>
      </b-col>
      <b-col cols="12" sm="6" md="6" lg="3">
        <img class="mudleImg" src="../../static/img/Icon/SmartHox_home_icon5.png">
        <p class="SmallTit">构建设备</p>
        <p class="smallSize">物联网(IoT)始于“物”（即设备）。构建您的设备（从添加传感器到创建智能设备），才能启动您的IoT解决方案。</p>
      </b-col>
    </b-row>
  </div>
</div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      slide: 0,
      sliding: null,
      CurCarousel: 0,
      CarouselList: [
        {
          'img': 'static/img/Banner/SmartHox_banner1.png',
          'tit_b': '全系列物联网接入网关',
          'tit_s': '',
          'tab_tit': 'Smart HoxONE智能控制器',
          'tab_icon': 'fa fa-cubes',
          'content': 'Smart Hox 打通物联网多协议连接，让万物互联真正融入工作和生活的每个场景，全面支持Wi-Fi、GPRS/3G/4G、ZigBee、RS485、Modbus、蓝牙、RF433、 2.4G 、Z-Wave、CAN等终端接入技术，广泛应用于各类物联网设备。'
        },
        {
          'img': 'static/img/Banner/banner_home4.jpg',
          'tit_b': 'IoT 数据云平台服务',
          ' tit_s': '',
          'tab_tit': 'Smart',
          'tab_icon': 'fa fa-cubes',
          'content': 'SmartHox作为物联网行业极具创新能力的IoT云平台为企业提供进入物联网必需的设备接入、设备控制、数据分析、供应链资源一站式服务，助力企业智造转型，并为其在物联网时代打造新商业模式。'
        },
        {
          'img': 'static/img/Banner/banner_home5.jpg',
          'tit_b': '物联网接入网关-Hox One',
          'tit_s': '',
          'tab_tit': '智能控制器',
          'tab_icon': 'fa fa-cubes',
          'content': '物联网解决方案提供商[构造数字化工厂  实现智能制造]'
        }
      ]
    }
  },
  methods: {
    ChangeCurCarousel (Idx) {
      this.CurCarousel = Idx
    },
    PreCurCarousel () {
      if (this.CurCarousel > 0) {
        this.CurCarousel -= 1
      } else {
        this.CurCarousel = 2
      }
    },
    NextCurCarousel () {
      if (this.CurCarousel < 2) {
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
</style>
