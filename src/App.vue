<template>
  <div id="app">
     <router-view></router-view>
         <tab-bar>
            <tab-bar-item path="/home">
              <img slot="item-icon" src="./assets/img/tabbar/KHCFDC_首页.svg" alt="">
              <img slot="item-icon-active" src="./assets/img/tabbar/首页-选中active.svg" alt="">
               <div slot="item-text">首页</div>
            </tab-bar-item>
               <tab-bar-item path="/category">
               <img slot="item-icon" src="./assets/img/tabbar/分类.svg" alt="">
               <img slot="item-icon-active" src="./assets/img/tabbar/分类-active.svg" alt="">
                <div slot="item-text">分类</div>
            </tab-bar-item>
               <tab-bar-item path="/cart">
              <img slot="item-icon" src="./assets/img/tabbar/购物车.svg" alt="">
              <img slot="item-icon-active" src="./assets/img/tabbar/购物车-active.svg" alt="">
                <div slot="item-text">购物车</div>
            </tab-bar-item>
               <tab-bar-item path="/profile">
              <img slot="item-icon" src="./assets/img/tabbar/我的.svg" alt="">
              <img slot="item-icon-active" src="./assets/img/tabbar/我的-active.svg" alt="">
                <div slot="item-text">我的</div>
            </tab-bar-item>
             

         </tab-bar>
       
 
 
 
  </div>

</template>

<script>
     import TabBar from './components/tabbar/TabBar.vue'
     import TabBarItem from './components/tabbar/TabbarItem'

export default {
  components:{
     TabBar,
    TabBarItem
  }
}
</script>

<style>
 @import"./assets/css/base.css";


</style>
