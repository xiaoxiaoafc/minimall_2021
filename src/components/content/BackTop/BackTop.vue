<template>
  <div class="back_top">
    <img src="~assets/img/common/top.png">
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>

.back_top{
  position: absolute;
  right: 10px;
  bottom: 50px;
  z-index: 10;

}

.back_top img{
  width: 50px;
  height: 50px;
}

</style>