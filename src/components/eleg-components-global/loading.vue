<template>
  <div class="loading" v-if="show===true">
    <div class="loading-mid">
      <div class="round"></div>
    </div>
  </div>
</template>
<script>
import { loading } from "../modules/controller";
export default {
  data() {
    return {
      show: false
    };
  },
  created() {
    loading.show = () => {
      this.show = true;
    };
    loading.hide = () => {
      this.show = false;
    };
  },
  methods: {}
};
</script>
<style lang="scss">
.loading {
  position: absolute;
  z-index: 999999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .loading-mid {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    box-sizing: border-box;
    border-radius: 0.04rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.1);
  }
  .round {
    height: .75rem;
    width: .75rem;
    border: .1rem solid rgba(0,0,0,0.6);
    box-sizing: border-box;
    border-radius: 50%;
    border-top-color: transparent;
    border-left-color: transparent;
    animation: round-tran .8s linear infinite , show-tran .6s forwards;
  }
}
@keyframes round-tran{
    from {
        transform: rotate(-45deg);
    }
    to {
        transform: rotate(315deg);
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