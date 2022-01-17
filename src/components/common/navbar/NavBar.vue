<template>
  <div id="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="conter"><slot name="conter">2</slot></div>
    <div class="righ"><slot name="righ"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  #nav-bar{
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  }
  #nav-bar .conter{
     flex: 1;
  }

   .left, .righ{
    width: 40px;
  }
</style>
