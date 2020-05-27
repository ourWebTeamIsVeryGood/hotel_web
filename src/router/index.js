import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import formVue from '../views/form.vue'
import selectPay from '../views/selectPay.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path :"/check",
    name:'form',
    component:formVue
  },
  {
    path :"/selectPay",
    name:'selectPay',
    component:selectPay
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
