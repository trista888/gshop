/**
 * 路由器对象
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Serach.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

/**
 * 声明使用路由插件
 */
Vue.use(VueRouter)

export default new VueRouter({
  /**
   *配置所有路由对象
   */
  routes: [
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    /**
     * 设置默认路由为msite
     */
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
