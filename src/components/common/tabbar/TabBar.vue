<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  import TabBarItem from "./TabBarItem";
  export default {
    name: "TabBar",
    comments : {
      TabBarItem
    }
  }
</script>

<style scoped>
  #tab-bar{
    background-color: #f6f6f6;
    display: flex;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
</style>
