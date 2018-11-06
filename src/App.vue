<template>
  <div id="app">
    <Header/>
    <SiderBar/>
    <div class="contentBox">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import SiderBar from './components/SiderBar'
import Footer from './components/Footer'
export default {
  name: 'App',
  data: function () {
    return {
    }
  },
  components: {
    Header,
    SiderBar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.contentBox{
  width: 100%;
  padding: 0px;
  overflow: hidden;
  /*background: yellow;*/
  text-align: center;
  margin-top: 115px;
  margin-left: 0px;
}
@media (min-width: 768px) {
  .contentBox{
    width: 100%;
    padding: 0px 0px 0px 130px;
    /*background: pink;*/
    margin-top: 115px;
    margin-left: 0px;
  }
}
.owl-next{
  right: 15px !important;
}
</style>
