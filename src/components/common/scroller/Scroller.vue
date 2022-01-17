<template>
  <div class="scroller_wrapper">
    <div class="scroller_wrapper_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'
export default {
  name: "Scroller",
  props : {
    probeType : {
      default : 1,
      type : Number
    },
    pullUpLoad : {
      default : false,
      type : Boolean
    }
  },
  data : function (){
    return {
      scroller : null
    }
  },
  mounted :function () {
    let wrapper = document.querySelector('.scroller_wrapper')
    this.scroller =  new BScroll(wrapper,{
      click : true,
      probeType : this.probeType,
      pullUpLoad: this.pullUpLoad
    });

    if(this.probeType == 3){
      this.scroller.on('scroll', (position) => {
       const  getPosition = function (){
          this.$emit("getPosition",position);
        }
        this.$emit("getPosition",position);
      });
    }

    if(this.pullUpLoad){
      this.scroller.on('pullingUp', () => {
        console.log("加载更多");
        this.$emit("pullingUp");
      });
    }




  },
  methods : {
    refresh : function (){
      console.log(11111111111);
      this.scroller && this.scroller && this.scroller.refresh();
    },
    scrollTo : function (x,y,easing) {
      this.scroller.scrollTo(x,y,easing);
    },

    finishPullUp : function () {
        this.scroller && this.scroller.finishPullUp();
    }

  }

}
</script>

<style scoped>

.scroller_wrapper{
  overflow: hidden;
}
</style>