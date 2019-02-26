<template>
   <div class="sidebar">
      <el-menu 
      background-color="#324157"
      text-color="#fff"
      active-text-color="#2d8cf0"
      class="menu"
      router
      unique-opened
      :default-active="$route.path"
      :collapse="isCollapse">
      <div v-for="(items,id) in $router.options.routes" :key="id">
         <div v-for="(item,index) in items.children" :key="index">
            <el-submenu :index="item.path" v-if="item.children">
               <template slot="title">
                  <i class="fa fa-fw" :class="item.meta.icon"></i>
                  <span slot="title">{{item.meta.title}}</span>
               </template>
               <el-menu-item v-for="(value,values) in item.children" :key='values'
                :index="value.path">{{value.meta.title}}</el-menu-item>
            </el-submenu>
            <el-menu-item :index="item.path" v-else>
               <i class="fa fa-fw" :class="item.meta.icon"></i>
               <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
         </div>
      </div>
      </el-menu>      
   </div>
</template>

<script>
import bus from './bus'
export default {
    data() {
      return {
        isCollapse: false

      };
    },
    created(){
       bus.$on('collapse',msg=>{
          this.isCollapse=msg
       })
    }
}
</script>

<style lang='less' scoped>
.sidebar{
   display: block;
   height: 100%;
   &::-webkit-scrollbar{
      width: 0;
   }
   .el-menu--collapse .el-menu-item span,.el-menu--collapse .el-submenu>.el-submenu__title span{
         display: none
      }
   & /deep/.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow,.el-menu--collapse .el-submenu__title.el-icon-arrow-right{
      display: none!important
   }
   .menu{
      height: 100%;
      .fa-fw{
         font-size: 15px;
         color: inherit;
         margin-right: 6px;
      }
      &:not(.el-menu--collapse) {
         width: 200px;
         height: 100%;
         border-right-width: 0;
      }
      // .el-menu-item{
      //    width: 200px;
      // }
      // .el-submenu{
      //    width: 200px;
      // }
   }
   
   
}
</style>

