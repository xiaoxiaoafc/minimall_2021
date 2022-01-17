<template>
  <div id="tab-bar-item" @click="itemClick">

    <div v-if="isActive"><slot  name="item-ioc-active"></slot></div>
    <div v-else><slot  name="item-ioc"></slot></div>
    <div :style="isActiveStyle" ><slot  name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props : {
    path : {
      type : String
    },
    activeStyle : {
      type : String,
      default : "coral"
    }
  },
  methods : {
    itemClick : function (){
      this.$router.replace(this.path);
    }
  },
  computed : {
    isActive : function (){
      return this.$route.path.indexOf(this.path) == 0;
    },
    isActiveStyle : function (){
      return this.isActive ? {"color" : this.activeStyle} : {};
    }
  }
}
</script>

<style scoped>
  #tab-bar-item{
    flex: 1;
    font-size: 14px;
    text-align: center;
  }

  #tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;

  }

</style>
