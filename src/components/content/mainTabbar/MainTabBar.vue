<template>
  <tab-bar>
    <TabBarItem path="/home" >
      <template v-slot:item-ioc>
        <img src="~assets/img/tabbar/home.svg">
      </template>
      <template v-slot:item-ioc-active>
        <img src="~assets/img/tabbar/home_active.svg">
      </template>
      <template v-slot:item-text>
        首页
      </template>
    </TabBarItem>
    <TabBarItem path="/category">
      <template v-slot:item-ioc>
        <img src="~assets/img/tabbar/category.svg">
      </template>
      <template v-slot:item-ioc-active>
        <img src="~assets/img/tabbar/category_active.svg">
      </template>
      <template v-slot:item-text>
        分类
      </template>
    </TabBarItem>
    <TabBarItem path="/cart">
      <template v-slot:item-ioc>
        <img src="~assets/img/tabbar/shopcart.svg">
      </template>
      <template v-slot:item-ioc-active>
        <img src="~assets/img/tabbar/shopcart_active.svg">
      </template>
      <template v-slot:item-text>
        购物车
      </template>
    </TabBarItem>
    <TabBarItem path="/profile">
      <template v-slot:item-ioc>
        <img src="~assets/img/tabbar/profile.svg">
      </template>
      <template v-slot:item-ioc-active>
        <img src="~assets/img/tabbar/profile_active.svg">
      </template>
      <template v-slot:item-text>
        我的
      </template>
    </TabBarItem>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
