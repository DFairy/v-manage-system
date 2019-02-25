<template>
  <el-container class="layout">
      <el-header>Header</el-header>
      <el-container>
        <v-side></v-side>
        <el-container class="contain">
          <el-main>Main</el-main>
        </el-container>
      </el-container>
  </el-container>
</template>

<script>
import vHead from './components/v-head'
import vTag from './components/v-tag'
import vSide from './components/v-side'
import bus from "./components/bus"
export default {
  components:{
    vHead,
    vTag,
    vSide
  },
  data(){
    return{
    }
  },
  created(){ 
  }
}
</script>

<style lang='less' scoped>
.layout{
  width: 100%;
  height: 100%;
  .contain{
    width: 100%;
    height: 100%;
  }
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  // .el-main {
  //   background-color: #E9EEF3;
  //   color: #333;
  //   text-align: center;
  //   line-height: 160px;
  // }
  
</style>