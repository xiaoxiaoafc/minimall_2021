<template>
  <div class="goods-list">
    <div class="goods-list-r">
      <goods-list-item v-for="(goods,index) in goodsList" :key="index" :goods="goods" v-if="index%2==0">

      </goods-list-item>
    </div>
    <div class="goods-list-l">
      <goods-list-item v-for="(goods,index) in goodsList" :key="index" :goods="goods" v-if="index%2!=0">

      </goods-list-item>
    </div>


  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props : {
    goodsList : {
      type : Array,
      default : []
    }
  },
  components: {GoodsListItem},
  comments : {
    GoodsListItem
  }
}
</script>

<style scoped>

.goods-list{
  display: flex;

}

.goods-list-l ,.goods-list-r{
   flex: 1;
   padding: 15px;
}
.goods-list-l{
  padding-left: 5px;
}
.goods-list-r{
  padding-right: 5px;
}
</style>