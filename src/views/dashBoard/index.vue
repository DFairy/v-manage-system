<template>
   <div class="dashboard">
      <panel-group></panel-group>
      <el-row :gutter="20">
         <el-col :span="16">
           
         </el-col>
         <el-col :span="8"></el-col>
      </el-row>
   </div>
</template>

<script>
import panelGroup from  './components/panelGroup'

export default {
   components:{
      panelGroup,
   }
}
</script>

<style lang='less' scoped>
.dashboard{
   width: 100%;
   height: 100%;
   padding: 15px;
   background: #f0f0f0;
}
</style>