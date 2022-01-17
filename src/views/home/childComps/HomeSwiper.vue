<template>
  <swiper>
    <swiper-item v-for="banner in banners" :key="banner.background">
      <a :href="banner.link">
        <img :src="banner.background" style="height: 150px;width: 100%" @load="loadSwiperItemImg">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper';
export default {
  name: "HomeSwiper.vue",
  components: {Swiper, SwiperItem},
  props: {
    banners: {
      type: Array,
      default: () => []
    },
  },
  methods : {
    loadSwiperItemImg : function () {
      this.$bus.$emit("loadSwiperItemImg");
    }
  }
}
</script>

<style scoped>


</style>
