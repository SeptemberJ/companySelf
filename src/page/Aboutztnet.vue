<template>
  <div class="Aboutztnet">
    <div class="LineBlock"></div>
    <div>
      <img v-if="aboutZ.image" :src="imgPre + aboutZ.image" style="backgroundSize: cover">
    </div>
    <!-- <div  class="mudleImg" style="position:relative;" :style="{backgroundImage: 'url(http://www.smart-hox.com:8081/upFiles/' + aboutZ.image + ')',backgroundRepeat:'no-repeat', backgroundPosition:'center center',backgroundSize:'cover'}">
      <div style="position:absolute;bottom:0;padding-left:40px;text-align:left;color:white;margin-top:80px;width:100%">
        <b-row>
          <b-col cols="12" sm="12" md="12" lg="10">
          </b-col>
          <b-col cols="12" sm="12" md="12" lg="2">
          </b-col>
        </b-row>
      </div>
    </div> -->
    <div style="width:90%;min-height:10px;padding-top:30px;margin:auto;text-align:left !important">
      <div class="AboutztnetMainContentBox">
        <div v-html="wholehtml"></div>
      </div>
    </div>
    <!-- team -->
    <section class="TeamBlock">
      <div class="personIntroduction">
        <p>{{teamList[curPersonIdx].introduce}}</p>
      </div>
      <div>
        <b-row class="PictureBlock">
          <b-col cols="3" style="padding: 0;text-align:left;"><img class="arrowIcon" src="../../static/img/circle-left.png" @click="PrePerson"></b-col>
          <b-col cols="6" style="padding: 0"><img class="pseronImg" :src="'http://www.smart-hox.com:8081/upFiles/' + teamList[curPersonIdx].head_pic"></b-col>
          <b-col cols="3" style="padding: 0;text-align:right;"><img class="arrowIcon" src="../../static/img/circle-right.png" @click="NextPerson"></b-col>
        </b-row>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Aboutztnet',
  data () {
    return {
      wholehtml: '',
      teamList: [],
      curPersonIdx: 0,
      thishtml: '',
      customerlist: '',
      joinuslist: '',
      companylist: '',
      teamlist: '',
      ztnetlist: '',
      aboutZ: '',
      newslist: '',
      activitylist: '',
      photolist: '',
      newlist2: '',
      show: true,
      show2: false,
      shows: true,
      show3: false,
      shown: true,
      show4: false,
      show6: true,
      show5: false,
      listIndex: 111,
      joinIndex: 222,
      newsIndex: 333,
      actIndex: 444
    }
  },
  computed: {
    ...mapState({
      app_URL: state => state.app_URL,
      imgPre: state => state.imgPre
    })
  },
  created: function () {
    this.getList()
  },
  methods: {
    PrePerson () {
      if (this.curPersonIdx > 0) {
        this.curPersonIdx--
      }
    },
    NextPerson () {
      if (this.curPersonIdx < this.teamList.length - 1) {
        this.curPersonIdx++
      }
    },
    getList (ID) {
      axios.get(this.app_URL + 'aboutZTNET'
      ).then((res) => {
        if (res.data.code === 1) {
          this.wholehtml = res.data.aboutZTNET[0].fcontent
          this.teamList = res.data.teamlist
          console.log(res.data.teamlist)
          // console.log(res.data)
          // this.aboutZ = res.data.aboutZTNET[0]
          // console.log(res.data.aboutZTNET[0].image)
          // this.thishtml = res.data.aboutZTNET[0].fcontent
          // this.customerlist = res.data.customerlist
          // this.joinuslist = res.data.joinuslist
          // this.companylist = res.data.companylist[0]
          // this.teamlist = res.data.teamlist
          // this.ztnetlist = res.data.ztnetlist
          // this.newslist = res.data.newslist
          // this.activitylist = res.data.activitylist
          // console.log(333)
          // this.changetime1()
          // console.log(444)
          // this.changetime2()
          // console.log(555)
          // this.photolist = res.data.photos[0]
          // this.newlist2 = res.data.newlist2[0]
        }
      })
    },
    changeshow (Idx) {
      this.listIndex = Idx
      this.show2 = true
    },
    changeushow (Idx) {
      this.listIndex = Idx
      this.show2 = false
      this.listIndex = 111
    },
    changejoin (Idx) {
      this.joinIndex = Idx
      this.show3 = true
    },
    changeujoin (Idx) {
      this.joinIndex = Idx
      this.show3 = false
      this.joinIndex = 222
    },
    changenews (Idx) {
      console.log(Idx)
      this.newsIndex = Idx
      this.show4 = true
    },
    changeunews (Idx) {
      this.newsIndex = Idx
      this.show4 = false
      this.newsIndex = 333
    },
    changeact (Idx) {
      this.actIndex = Idx
      this.show5 = true
    },
    changeuact (Idx) {
      this.actIndex = Idx
      this.show5 = false
      this.actIndex = 444
    },
    changetime1 () {
      console.log(this.newslist)
      for (var i = 0, lenI = this.newslist.length; i < lenI; ++i) {
        var date = new Date(this.newslist[i].news_date.time)
        var Y = date.getFullYear() + '年'
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月'
        var D = date.getDate() + '日'
        var time1 = (Y + M + D)
        console.log(time1)
        this.newslist[i].createtime = time1
        console.log(this.newslist)
      }
      console.log(this.newslist)
    },
    changetime2 () {
      for (var i = 0, lenI = this.activitylist.length; i < lenI; ++i) {
        var date = new Date(this.activitylist[i].activity_date.time)
        var Y = date.getFullYear() + '年'
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月'
        var D = date.getDate() + '日'
        var time2 = (Y + M + D)
        this.activitylist[i].createtime = time2
        console.log(this.activitylist)
      }
    }
  }
}
</script>
<style scoped>
.PictureBlock{
  height: 240px;
  margin: 40px auto;
  overflow: hidden;
}
.arrowIcon{
  width: 40px;
  height: 40px;
  margin: 100px auto;
  cursor: pointer;
}
.personIntroduction{
  margin-bottom: 50px;
}
.pseronImg{
  height: 200px;
  margin: 20px auto;
}
.card-img-top{
  height: 250px;
}
.Aboutztnet{
  padding: 0 40px;
}
.TeamBlock{
  width:90%;
  margin: 20px auto 40px auto;
}
.Img{
  width: 100%;
  margin: 10px auto !important;
}
.piclist{
  width: 100%;
  min-height: 100px;
}
.callan{
  width: 100%;
  min-height: 50px;
  border: 1px solid #267997;
  border-radius: 4px
}
.introduce{
  min-height: 100px;
  width:100%;
}
.detail{
  font-size: 14px;
  text-align: left;
  color: #333;
}
.mudleImg{
  width:100%;
  height:500px;
}
.blue{
  color: white;
  font-size:14px;
  height: 30px;
}
.pic{
  width: 100%;
  height: 190px;
}
.news{
  background: linear-gradient(to bottom,rgba(0,63,86,1) 0,rgba(0,105,144,1) 90%);
  overflow-y:hidden
}
.mewslist{
  background: #267997;
  border: 1px solid rgba(223,223,223,0.5);
  height: 109px;
}
.mewslist1{
  background: #267997;
  border: 1px solid rgba(223,223,223,0.5);
  min-height: 209px;
  overflow: auto
}
.ablow{
  position: absolute;
  bottom: 0px;
  background: rgba(0,0,0,0.7);
  color: white;
  width: 100%;
  text-align: left;
  height: 70px;
  padding-top:15px;
  white-space:nowrap;
  overflow:hidden;
  /* text-overflow:ellipsis; */
}
.ablow2{
  position: absolute;
  bottom: 0px;
  background: rgba(0,0,0,0.7);
  color: white;
  width: 100%;
  text-align: left;
  height:370px;
  white-space:pre-wrap;
  }
/* .ablow:hover{
  position: absolute;
  bottom: 0px;
  background: rgba(0,0,0,0.7);
  color: white;
  width: 100%;
  text-align: left;
  height:370px;
  white-space:pre-wrap;
  } */
  .fpic{
    width: 100%;
    height:100%
  }
</style>
