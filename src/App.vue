<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
  	FooterGuide
  }
}
</script>
<!-- 声明stylus语法 -->
<style lang="stylus" rel="stylesheet/stylus">
#app 
  color red
</style>
