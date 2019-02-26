<template>
   <div class="header">
      <div class="header-left">
         <hamburger :toggle-click="toggleClick" :is-active="isCollapse" class="hamburger-container"></hamburger>
         <div>后台管理系统</div>
      </div>
      <ul class='header-right'>
         <li @click="handleFullScreen">
            <el-tooltip class="item" effect="dark" :content="fullscreen?'取消全屏':'全屏'" placement="bottom">
               <i class="fa fa-arrows-alt" ></i>
            </el-tooltip>
         </li>
         <li>
            <el-tooltip class="item" effect="dark" content="未读消息" placement="bottom">
               <el-badge is-dot class="item">
                  <i class="fa fa-bell-o" ></i>
               </el-badge>
            </el-tooltip>
         </li>
         <li @click="dialogVisible = true">
            <el-tooltip class="item" effect="dark" content="修改密码" placement="bottom">
               <i class="fa fa-pencil-square-o"></i>
            </el-tooltip>
         </li>
         <li>
            <el-dropdown class="user-name" trigger="click">
                  <span class="el-dropdown-link">
                     {{username}} <i class="fa fa-angle-down"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">                    
                     <el-dropdown-item>
                           <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">项目仓库</a>
                     </el-dropdown-item>                    
                     <el-dropdown-item divided>
                        <router-link to="/login">退出登录</router-link>
                     </el-dropdown-item>
                  </el-dropdown-menu>
               </el-dropdown>
         </li>
      </ul>
      <!-- 修改密码 -->
        <el-dialog title="修改密码" :visible.sync="dialogVisible" width="460px" custom-class="dialog-title">
         <el-form :model="form" size='medium' :label-width="formLabelWidth" :label-position="labelPosition">
               <el-form-item label="现在的密码">
                  <el-input v-model="form.oldPassword" auto-complete="off"></el-input>
               </el-form-item>
               <el-form-item label="设置新密码">
                  <el-input v-model="form.newPassword1" auto-complete="off"></el-input>
               </el-form-item>
               <el-form-item label="重复新密码">
                  <el-input v-model="form.newPassword2" auto-complete="off"></el-input>
               </el-form-item>
         </el-form>
         <span slot="footer" class="dialog-footer">
               <el-button @click="dialogVisible = false">取 消</el-button>
               <el-button type="primary" @click="confirm">确 定</el-button>
         </span>
      </el-dialog>
   </div>
</template>

<script>
import hamburger from 'components/hamburger/index'
import bus from './bus'
export default {
   components:{
      hamburger
   },
   data(){return{
      isCollapse:false,
      fullscreen:false,
      username:"admin",
      dialogVisible:false,
      form:{
         oldPassword:'',
         newPassword1:'',
         newPassword2:''
      },
      formLabelWidth:'100px',
      labelPosition: "left",
   }},
   methods:{
      toggleClick(){
         this.isCollapse=!this.isCollapse;
         bus.$emit('collapse',this.isCollapse)
      },
      //屏幕全屏与取消全屏
    handleFullScreen(){
      let element = document.documentElement;
      if (this.fullscreen) {
          if (document.exitFullscreen) {
              document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
          }
      } else {
          if (element.requestFullscreen) {
              element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
              element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
              element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
              // IE11
              element.msRequestFullscreen();
          }
      }
      this.fullscreen = !this.fullscreen;
    },
    confirm(){
       this.dialogVisible=false
    }
   }
}
</script>

<style lang='less' scoped>

@import '../../../common/style/mixin.less';
.header {
   .flex(space-between);
   padding: 0 20px;
   height: 60px;
   background-color: #242f42;
   color: #fff;
   text-align: center;
   // line-height: 60px;
   .header-left{
      .flex(flex-start);
      .hamburger-container {
         line-height: 46px;
         height: 100%;
         float: left;
         cursor: pointer;
         transition: background .3s;
         &:hover {
            background: rgba(0, 0, 0, .025)
         }
      }
   }
   .header-right{
      .flex(space-between);
      width: 220px;
      color: #fff;
      font-size: 18px;
      li{
         cursor: pointer;
         .el-dropdown{
            color: #fff;
         }
      }
   }
}
</style>