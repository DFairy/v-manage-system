<template>
  <el-container class="layout">
      <el-header>
        <v-head></v-head>
      </el-header>
      <el-container>
        <v-side></v-side>
        <el-container class="contain">
          <el-main>
             <bread-crumb></bread-crumb>
             <v-tag></v-tag>
             <app-main></app-main>
          </el-main>
        </el-container>
      </el-container>
  </el-container>
</template>

<script>
import vHead from './components/v-head'
import vTag from './components/v-tag'
import vSide from './components/v-side'
import appMain from './components/appMain'
import breadCrumb from './components/breadCrumb'
export default {
  components:{
    vHead,
    vTag,
    vSide,
    appMain,
    breadCrumb
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
  .el-header{
    padding: 0;
  }
  .contain{
    width: 100%;
    height: 100%;
    .el-main {
      padding: 0;
      background-color: #E9EEF3;
    }
  }
}


  
</style>