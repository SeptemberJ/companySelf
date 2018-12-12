<template>
  <div class="Article" style="padding:0px;width:100%">
    <!-- 列表 -->
    <div  v-if="!showDetail" class="listItem CursorPointer" style="text-align:left;position: relative;" v-for="(item,Idx) in playList" :key="Idx" @click="GoDetail(item)">
      <b-row>
        <b-col cols="4" sm="4" md="4" lg="3" style="overflow: hidden">
          <img class="mudleImg" :src="'http://www.smart-hox.com:8081/upFiles/' + item.play_pic">
        </b-col>
        <b-col cols="8" sm="8" md="8" lg="9" style="position:relative;">
          <h6>{{item.play_title}}</h6>
          <p class="smallSize" style="text-align:left;display:block;word-break: break-all;word-wrap: break-word;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;">{{item.play_introduce}}</p>
          <p class="smallSize" style="position: absolute;margin-bottom: 0px;bottom: 0; position:absolute;">发布时间：{{item.createtime}}</p>
        </b-col>
      </b-row>
    </div>
    <!-- 详情 -->
    <div v-if="showDetail" style="width:90%;margin:20px auto 20px auto;">
      <b-row>
        <b-col cols="12">
          <b-breadcrumb>
            <b-breadcrumb-item class="breadItems" v-for="(item, idx) in breadItems" :key="idx" @click="changeBreadItem(idx)">{{item.text}}</b-breadcrumb-item>
          </b-breadcrumb>
        </b-col>
      </b-row>
      <div class="ArticleMainContentBox">
        <h2 class="MarginT_20">{{article.play_title}}</h2>
        <div v-html = "article.play_content" style="padding-top:0px;overflow: hidden;text-align: left">
        </div>
      </div>
    </div>
    <!-- <div v-if="articleList.length > 0" style="margin: 10px;overflow: hidden">
      <div style="float: right; margin-top: 20px;">
          <Page :total="total" :current="curPage" @on-change="changePage" :page-size="pageSize" show-total></Page>
      </div>
    </div> -->
  </div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Article',
  data () {
    return {
      playList: [],
      showDetail: false,
      breadItems: [
        {
          text: '文章列表',
          href: '#/Article'
        }
      ],
      article: []
    }
  },
  computed: {
    ...mapState({
      app_URL: state => state.app_URL
    })
  },
  created: function () {
    this.getshiwan()
  },
  methods: {
    // pagechange(currentPage){
    //   console.log(currentPage);
    // },
    changeBreadItem (idx) {
      if (idx === 0) {
        this.showDetail = false
        this.breadItems.pop()
      }
    },
    getshiwan () {
      axios.get(this.app_URL + 'playList'
      ).then((res) => {
        if (res.data.code === 1) {
          this.playList = res.data.playList
          for (var i = 0, lenI = this.playList.length; i < lenI; ++i) {
            var date = new Date(this.playList[i].create_date.time)
            var Y = date.getFullYear() + '-'
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
            var D = date.getDate() + ' '
            var h = date.getHours() + ':'
            var m = date.getMinutes() + ':'
            var s = date.getSeconds()
            var time1 = (Y + M + D + h + m + s)
            this.playList[i].createtime = time1
          }
        }
      })
    },
    GoDetail (item) {
      this.showDetail = true
      this.breadItems.push({'text': item.play_title, active: true})
      this.article = item
    }
  }
}
</script>
<style scoped>
.listItem{
  padding: 20px 20px;
  width: 96%;
  min-height: 150px;
  margin: 20px auto;
  border: 1px solid #eee;
}
.breadItems a{
  font-size: 12px !important;
}
.listItem:hover{
  box-shadow: 0 0 10px #ccc;
}
@media (min-width: 768px) {
  .listItem{
    padding: 20px 20px;
    text-align: left;
  }
  .breadItems a{
    font-size: 1rem !important;
  }
}

.mudleImg{
  font-size: 12px;
  line-height:150px;
  width:100%;
  min-width:200px;
  height:120px;
  overflow: hidden;
}
</style>
