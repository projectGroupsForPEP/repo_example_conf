<template>
  <div id="app">
    <AlertComp></AlertComp>
    <LoadingComp></LoadingComp>
    <ToastComp></ToastComp>
    <router-view></router-view>
  </div>
</template>
<script>
import AlertComp from "./components/eleg-components-global/alert";
import LoadingComp from "./components/eleg-components-global/loading";
import ToastComp from "./components/eleg-components-global/toast";
export default {
  components: {
    AlertComp,
    LoadingComp,
    ToastComp
  }
};
</script>
<style lang="scss">
@import "./css/common.scss";
</style>