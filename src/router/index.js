import Vue from 'vue'
import Router from 'vue-router'
import Internet from '@/page/Internet'
import Product from '@/page/Product'
import Article from '@/page/Article'
import AboutUs from '@/page/AboutUs'
import Aboutsale from '@/page/Aboutsale'
import Aboutztnet from '@/page/Aboutztnet'
import SecondMenuHtml from '@/page/SecondMenuHtml'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Internet',
      component: Internet
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article
    },
    {
      path: '/Aboutsale',
      name: 'Aboutsale',
      component: Aboutsale
    },
    {
      path: '/Aboutztnet',
      name: 'Aboutztnet',
      component: Aboutztnet
    },
    {
      path: '/SecondMenu/:id',
      name: 'SecondMenuHtml',
      component: SecondMenuHtml
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {path: '*', redirect: '/'}
  ]
})
// 登录控制
router.beforeEach((to, from, next) => {
  next()
})
export default router
