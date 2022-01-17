<template>
  <div class="goods-items">
    <a href="javascript:void(0)"  @click="goodItemClick(goods)">
      <div class="goods-wrapper">
        <div class="goods-cove">
          <img :src="goods.img" alt="" :key="goods.id" @load="loadImage" >
        </div>
        <div class="goods-title">

        </div>

      </div>
      <div class="goods-info">
        <div class="goods-info-title">{{goods.title}}</div>
        <div class="goods-info-title-price">
            <div class="current-price">
              <span class="rmb-ios">￥</span>
              <span class="price-zen">{{goods.showOrgPrice}}</span>
              <span class="price-fen">33</span>
            </div>
          <img class="button-icon" :src="goods.bottomIcon" @load="loadImage">
          <div class="sale-wrapper">
            <div class="sale">{{goods.sale}}</div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props : {
    goods : {
      type : Object,
      default : {}
    }
  },
  methods : {
    loadImage : function () {
      this.$bus.$emit("loadImage");
    },
    goodItemClick : function (goods){
      this.$router.replace(`/detail/${goods.iid}`)
    }
  },
  computed : {
    showZen : function (){

    },
    showFen : function (){

    }
  },
  name: "GoodsListItem"
}
</script>

<style scoped>
  .goods-items{
    width: 100%;
    margin-bottom: 15px;
  }
  .goods-cove img{
    width: 100%;
  }

  .goods-info-title{
    padding: 5px;
    font-size: 14px;
    line-height: 16px;
  }

  .goods-info-title-price{
    display: flex;
    margin-top: 10px;
  }

  .goods-info-title-price .current-price .price-zen{
    font-size: 12px;
    font-weight: 500;
    color: #f46;
  }

  .goods-info-title-price .current-price .price-fen {
    font-size: 12px;
    font-weight: 500;
    color: #f46;
  }

  .goods-info-title-price .button-icon{
    width: 30px;
    height: 15px;
    margin-left: 10px;
  }

  .goods-info-title-price .sale-wrapper{
    display: inline-block;
    margin-right: 10px;
    padding: 0.05rem 0.12rem;
    line-height: 1;
    background: #ffecef;
    border-radius: 0.28rem;
    font-size: 11px;
    color: #f46;
  }
</style>