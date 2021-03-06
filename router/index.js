import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Cart from '../views/cart/Cart'
import Category from '../views/category/Category'
import Profile from '../views/profile/Profile'
Vue.use(VueRouter)


const routes=[
     {
       path:'',
       redirect: '/home',

     },
     {
        path:'/home',
        component:Home

     },
     {
        path:'/cart',
        component:Cart

     },
     {
        path:'/category',
        component:Category

     },
     {
        path:'/profile',
        component:Profile

     }


]


const router =new VueRouter({

routes,
mode:'history'

})

export default  router