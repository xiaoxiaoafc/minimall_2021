<template>
  <div class="home-feature">
    <div class="home-feature-title" >本周流行</div>
    <div class="home-feature-content">
      <div class="home-feature-content-item" v-for="fatureView in subFlist(fatureViews,8)" :key="fatureView.image">
        <div class="home-feature-content-item-image">
          <a href="javascript:void(0)">
            <img :src="fatureView.image" width="100%">
          </a>
        </div>
        <div class="home-feature-content-item-title">
          {{fatureView.title}}
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {

  name: "HomeFeatureView",
  props : {
    fatureViews : {
      type : Array,
      default : ()=> []
    }
  },
  methods : {
    subFlist : function (recommends,num) {
      return recommends.slice(recommends.length - num,recommends.length )
    }
  }
}
</script>

<style scoped>

.home-feature-title{
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.home-feature-content{
  display: flex;
  flex-wrap: wrap;
}
.home-feature-content-item{
  width: 25%;
}
.home-feature-content-item-image{
  padding: 18px;
}
.home-feature-content-item-title{
  text-align: center;
  font-size: 15px;
}
</style>