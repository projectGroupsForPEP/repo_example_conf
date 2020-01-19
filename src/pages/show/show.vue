<template>
  <div>
    <ListSlideUp></ListSlideUp>
  </div>
</template>
<script>
import {
  isReachPageBottom,
  debounce,
  throttle,
  stable
} from "../../components/modules/utils";
import ListSlideUp from "../../components/eleg-components-part/listSlideUp";
export default {
  name: "Show",
  components: {
    ListSlideUp
  }
};
</script>
<style lang="scss">
</style>