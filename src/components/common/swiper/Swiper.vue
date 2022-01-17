<template>
  <div class="swiper">
    <div class="swiper-items" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
       <slot></slot>
    </div>
    <div class="swiper-indicator">
      <div v-for="(item,index) in swiperItemsCount" :key="index" class="swiper-indicator-item" :class="{active : currentIndex - 1 === index}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props : {
    interval: {//多长时间播一张
      type: Number,
      default: 3000
    },
    animDuration: {//校验的时间
      type: Number,
      default: 300
    },
    showSwiperIndicator : {
      type : Boolean,
      default :true
    },moveRatio: {
      type: Number,
      default: 0.25
    },
  },
  data : function () {
    return {
      swiperItemsEl : {},//轮播图对象
      swiperItemsStyle : {},//样式用来对上滚动的属性
      swiperItemsWidth : 0,//轮播图的宽度
      swiperItemsCount : 0,//轮播的图片数量
      currentIndex : 1,//当前是哪一张图片
      scrolling: false, // 是否正在滚动
    }
  },
  //刚开始在请求到图片以后初始化属性然后开始轮播
  mounted : function() {
    setTimeout(()=>{
      this.handleDom();
      this.startTime();
    },1000)
  },
  methods : {

    //开始定时器
    startTime : function (){
      this.playTimer = setInterval(()=>{
        this.currentIndex ++;
        this.scrollContnt(-this.currentIndex * this.swiperItemsWidth);
      },this.interval)

    },
    //关闭定时器
    stopTimer: function () {
      window.clearInterval(this.playTimer);
    },
    //滚动内容
    scrollContnt : function (position) {
      //开始滚动
      this.scrolling = true;
      this.swiperItemsStyle.transition ='transform '+ this.animDuration + 'ms';
      this.setTransform(position);
      this.checkPosition();
      //滚动完成
      this.scrolling = false;
    },

    //判断是滚动到了最后一张还是第一张，小于0是解决移动到了第一张的时候再往前面拉屎最后一张
    checkPosition : function (){
      window.setTimeout(()=>{
        this.swiperItemsStyle.transition = '0ms';
        if(this.currentIndex >= this.swiperItemsCount + 1){
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.swiperItemsWidth);
        }else if(this.currentIndex <= 0){
          this.currentIndex = this.swiperItemsCount ;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
        this.$emit('transitionEnd', this.currentIndex-1);
      },this.animDuration);
    },
    //移动
    setTransform: function (position) {
      this.swiperItemsStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperItemsStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
      this.swiperItemsStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
    },
    //开始初始化计算一些属性
    handleDom : function (){
      let swiperItemsEl = document.querySelector(".swiper-items");
      this.swiperItemsEl = swiperItemsEl;
      this.swiperItemsWidth =  swiperItemsEl.offsetWidth;
      this.swiperItemsStyle = swiperItemsEl.style;
      let swiperItemEls = swiperItemsEl.getElementsByClassName("swiper-item");
      this.swiperItemsCount = swiperItemEls.length;
      let cloneFirst = swiperItemEls[0].cloneNode(true);
      let lastFirst =  swiperItemEls[this.swiperItemsCount - 1].cloneNode(true);
      swiperItemsEl.insertBefore(lastFirst,swiperItemEls[0]);
      swiperItemsEl.appendChild(cloneFirst);
      this.setTransform(-this.swiperItemsWidth);
    },
    //刚开始移动
    touchStart : function (e){
      if(this.scrolling){
        return;
      }
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },
    //移动的过程
    touchMove : function (e) {
      this.currentX = e.touches[0].pageX;
      this.moveX = this.currentX - this.startX;
      let position = -this.currentIndex * this.swiperItemsWidth;
      let currentPosition = position + this.moveX;
      this.setTransform(currentPosition);

    },
    //移动以后
    touchEnd : function (){
      let currMove = Math.abs(this.moveX);
      if(currMove == 0){
        return ;
      }else if(this.moveX > 0 && this.moveX > this.swiperItemsWidth * this.moveRatio){
        this.currentIndex --;
      }else if(this.moveX < 0 && this.moveX < this.swiperItemsCount * this.moveRatio){
        this.currentIndex ++;
      }
      this.scrollContnt(-this.currentIndex * this.swiperItemsWidth);
      this.startTime();
    }

  }

}
</script>

<style scoped>
.swiper{
  position: relative;
  height: 150px;
  overflow: hidden;
}
.swiper .swiper-items{
  display: flex;
}
.swiper .swiper-items .swiper-item{
  flex-shrink: 0;
  width: 100%;
}
.swiper .swiper-items .swiper-item img{
  width: 100%;
}
.swiper .swiper-indicator {
  width: 100%;
  color: red;
  position: absolute;
  display: flex;
  justify-content : center;
  bottom: 8px;
}
.swiper .swiper-indicator .swiper-indicator-item{
  width: 8px;
  background: #ffffff;
  height: 8px;
  margin: 0 5px;
  border-radius: 4px;
}
.swiper .swiper-indicator  .active{
  background: red;
}
</style>