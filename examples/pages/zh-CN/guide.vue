<template>
  <div id="guide">
    <div id="guide_1"></div>
  </div>
</template>

<script>
export default {
  name: "guide"
}
</script>

<style scoped lang="scss">
  #guide{
    position: absolute;
    top:100px;
    left: 0;
    width: 100%;
    height: calc(100% - 100px);
    background: #fff;
    #guide_1{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("/examples/assets/images/home_about_new.jpg") no-repeat center/cover;
      background-size: 105%;
      -webkit-animation: breath-data-v-8021cc02 4s infinite ease-out;
      animation: breath-data-v-8021cc02 4s infinite ease-out;
     }
  }
</style>
