<template>
  <div>

    <home-swiper :banners="banners"></home-swiper>
  </div>


</template>

<script>

import HomeSwiper from "../home/childComps/HomeSwiper";



export default {
  name: "Cart",
  data : function (){
    return {
      banners : [
          {"link" : "www.baidu1.com",background : "https://s5.mogucdn.com/mlcdn/c45406/201219_5175a61c1je1l538dbhfh3cf10jh5_400x400.jpg"},
          {"link" : "www.baidu2.com",background : "https://s5.mogucdn.com/mlcdn/c45406/210626_7e4i6b8863f55j5hcclahc5blej45_400x400.jpg"},
          {"link" : "www.baidu3.com",background : "https://s5.mogucdn.com/mlcdn/c45406/200623_09id7e4617dc348e8jhh2d7cah2lc_400x400.jpg"},
          {"link" : "www.baidu4.com",background : "https://s5.mogucdn.com/mlcdn/c45406/200405_6f3cca5k278c50fk2gfeg2bkj6ci9_400x400.jpg"},
        ]
    }
  },
  components: {
    HomeSwiper
  },

}
</script>

<style scoped>

</style>
