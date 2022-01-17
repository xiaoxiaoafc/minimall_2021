<template>

  <div class="home" >
    <tab-control  class="tab-control" style="position: absolute;left: 0px;right: 0px;z-index: 10000"
                  :tabControls="['首页','商城','直播']"
                  @tabClick="tabClick"
                  v-show="tableControlTop"
                  ref="topTabControl"
    />
    <nav-bar class="home-nav-bar" >
      <template slot="conter" >购物街</template>
    </nav-bar>
    <scroller class="scroller" ref="scroller" :probeType = "3" :pullUpLoad ="true" @getPosition="getPosition" @pullingUp="pullingUp">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature-view :fatureViews ="recommends"/>
      <tab-control  class="tab-control"
                    :tabControls="['首页','商城','直播']"
                    @tabClick="tabClick"
                    ref="tabControl"
                    v-show="!tableControlTop"
      />
      <GoodsList :goodsList="goods[currenType].list"></GoodsList>
    </scroller>

    <backTop @click.native="backTop" v-show="isShowBackTop"/>




  </div>
</template>

<script>

  import Scroller from "components/common/scroller/Scroller";

  import HomeSwiper from "./childComps/HomeSwiper"
  import HomeRecommend from "./childComps/HomeRecommend"
  import HomeFeatureView from "./childComps/HomeFeatureView"


  import NavBar from "components/common/navbar/NavBar"
  import TabControl from "components/content/tabControl/TabControl"
  import GoodsList from "components/content/good/GoodsList"
  import BackTop from "components/content/BackTop/BackTop"

  import homeAPI from "../../network/home";
  export default {
    name: "Home",
    data : function (){
      return {
        banners : [],//轮播图
        recommends : [],
        goods : {
          "index" : {
            page : 0,
            list : []
          },
          "mall" : {
            page : 0,
            list : []
          },
          "live" : {
            page : 0,
            list : []
          },
        },
        currenType : 'index',
        isShowBackTop : false,
        tableControlTop : false,
        tabControlOffsetTop : 0
      };
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeatureView,
      TabControl,
      GoodsList,
      Scroller,
      BackTop
    },
    comments : {
      NavBar
    },
    created : function () {

      this.getBanner();
      this.getRecommend();
      this.getGoods("index");
      this.getGoods("mall");
      this.getGoods("live");

    },
    mounted :function () {

      let refresh = this.debounce(this.$refs.scroller.refresh,100);

      this.$bus.$on("loadImage",()=>{
        refresh();
      });

      this.$bus.$on("loadSwiperItemImg",()=>{
          this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;


      });
    },
    methods : {
      aa : function () {


      },
      getGoods : function (type){
        this.goods[type].page ++;
        homeAPI.homeAPI.getGoodsData(type,this.goods[type].page).then(result=>{
          this.goods[type].list.push(...result.data);
          this.$refs.scroller.finishPullUp();
        });
      },
      getBanner : function () {
        homeAPI.homeAPI.getBanner().then(result=>{
          this.banners = result.data;
        });
      },
      getRecommend : function () {
        homeAPI.homeAPI.getRecommend().then(result=>{
          this.recommends = result.data;
        });
      },

      tabClick : function (index) {
        switch (index){
          case 0 :
            this.currenType = 'index';
            break;
          case 1 :
            this.currenType = 'mall';
            break;
          case 2 :
            this.currenType = 'live';
            break;
        }

        this.$refs.topTabControl.active = index;
        this.$refs.tabControl.active = index;
      },
      backTop : function (){
        this.$refs.scroller.scrollTo(0, 0 , 500);
      },

      getPosition : function (ponsition) {
        this.isShowBackTop = (- ponsition.y) > 200;
        this.tableControlTop = (-ponsition.y) > this.tabControlOffsetTop;
      },

      pullingUp : function () {
        this.getGoods(this.currenType);
      },

      debounce : function (func, wait) {
        let timer;
        return function () {
          let  context = this;
          let args = arguments;
          if(timer)clearTimeout(timer);
          timer = setTimeout(()=>{
            func.apply(context,args)
          },wait);

        }
      }

    }
  }
</script>

<style scoped>

  .home-nav-bar {
    background-color: var(--color-tint);
    color:#fff;
    left: 0px;
    right: 0px;
  }
  .tab-control{
    position: sticky;
    top:44px
  }

  .scroller{
    position: absolute;
    bottom: 46px;
    top: 44px;
    left: 0px;
    right: 0px;
    z-index: 10;
  }

</style>
