<template>
  <div class="toast" v-if="show===true">
    <div class="toast-mid">
        {{content}}
    </div>
  </div>
</template>
<script>
import { toast, alert } from "../modules/controller";
export default {
  data() {
    return {
      show: false,
      content: ''
    };
  },
  created() {
    toast.show = (content="content") => {
      this.content = content
      this.show = true;
    };
    toast.hide = () => {
      this.show = false;
    };
  },
  methods: {}
};
</script>
<style lang="scss">
.toast {
  position: absolute;
  z-index: 999999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .toast-mid {
    position: fixed;
    width: 3rem;
    height: .5rem;
    line-height: .5rem;
    text-align: center;
    box-sizing: border-box;
    border-radius: 0.3rem;
    left: 50%;
    top: 70%;
    color: #fff;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.4);
    animation: show-tran 1s forwards;
  }
}
@keyframes show-tran{
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>