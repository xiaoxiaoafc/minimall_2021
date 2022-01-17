<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(tabControl,index) in tabControls" :key="index" @click="tabControlClick(index)">
      <span  :class="{active : active === index}">
        {{tabControl}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data : function () {
    return {
      active : 0
    }
  },
  props : {
    tabControls : {
      type : Array,
      default  : ()=>[]
    }
  },
  methods : {
    tabControlClick : function (index){
      this.active = index;
      this.$emit("tabClick",index)

    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    height: 40px;
    line-height: 40px;
    background: #ffffff;
  }
  .tab-control-item{
    flex: 1;
    text-align: center;
  }

  .tab-control-item span{
    padding: 5px;
  }


  .active {
    border-bottom: 2px solid var(--color-tint);
    color: var(--color-high-text);
  }


</style>