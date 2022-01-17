<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-for="recommend in subFlist(recommends,4)" :key="recommend.image">
      <a>
        <div class="home-recommend-item-img">
          <img :src="recommend.image" width="100%">
        </div>
        <div class="home-recommend-item-title">
          {{recommend.title}}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props : {
    recommends : {
      type : Array,
      default : ()=>[]
    }
  },
  methods : {
    subFlist : function (recommends,num) {
      return recommends.slice(0,num )
    }
  }
}
</script>

<style scoped>

.home-recommend{
  display: flex;
  padding-bottom: 15px;
  border-bottom: 10px solid rgba(100, 100, 100, 0.1);
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.home-recommend-item{
  flex: 1;

}

.home-recommend-item-img{
  padding: 8px;
}

.home-recommend-item-title{
  text-align: center;
  font-size: 15px;
}
</style>