<template>
  <div class="slide-div">
    <div class="slide-list" :style="slideStyle">
      <div class="slide-item" :style="isHide(index)" v-for="(i, index) in list" :key="index">{{i}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListSlideUp",
  data() {
    return {
      list: [1, 2, 3, 4, 5, 1, 2],
      slideStyle: "",
      index: 0
    }
  },
  mounted() {
    this.animRender()
  },
  methods: {
    isHide(i) {
      if (i <= this.index)
        return {
          opacity: "0",
          transition: "all 1s ease"
        };
    },
    animRender() {
      return setInterval(() => {
        this.index++
        if (this.index === 5) {
          setTimeout(() => {
            this.index = 0
            this.slideStyle = { top: -this.index * 0.5, transition: "" }
          }, 200)
        }
        this.slideStyle = {
          top: -this.index * 0.5 + "rem",
          transition: "all .4s ease"
        }
      }, 1500)
    }
  }
};
</script>
<style lang="scss">
.slide-div {
  height: 1rem;
  width: 1.2rem;
  border: 0.02px solid #666;
  overflow: hidden;
  margin: 2rem auto;
  position: relative;

  .slide-list {
    position: absolute;
    width: 1.2rem;
    z-index: -1;
    top: 0;
  }
  .slide-item {
    text-align: center;
    height: 0.5rem;
    line-height: 0.5rem;
  }
}
</style>