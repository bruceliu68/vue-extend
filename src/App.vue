<template>
  <div id="app">
    <el-container>
      <el-header style="height:50px;"><headerWrap></headerWrap></el-header>
      <el-main><router-view/></el-main>
    </el-container>
  </div>
</template>

<script>
import headerWrap from './components/headerWrap';

export default {
  name: 'App',
  components: {
    headerWrap,
  },
};
</script>
<style lang="less" src="./assets/common.less"></style>
