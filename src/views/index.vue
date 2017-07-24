<template>
  <div>
    <side-bar></side-bar>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import sideBar from './../components/common/sideBar'
export default {
  components: {
    sideBar
  }
}
</script>
<style lang="scss" scoped>
.right{
  margin-left: 240px;
}
</style>

