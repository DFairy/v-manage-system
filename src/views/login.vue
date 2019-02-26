<template>
   <div class="login">
      <img src="../common/img/avatar.jpg" class="avatar">
       <div class="login-form">
            <el-form :model="login" status-icon :rules="rules2" ref="login" label-width="100px" class="demo-ruleForm">
                <el-form-item prop="user">
                    <el-input placeholder="Username"  v-model="login.user" prop="user"  clearable>
                        <i slot="prefix" class="fa fa-user-o"></i>
                    </el-input>
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input type="password" placeholder="Password"   v-model="login.pass"  clearable>
                        <i slot="prefix" class="fa fa-key"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small" class="gradient-btn"  @click="submitForm('login')">Login</el-button>
                </el-form-item>                
            </el-form>
            <div class="tip">tips:用户名和密码随便填，密码不得小于6位数</div>
       </div>
   </div>
</template>

<script>
  export default {
    data() {
      return {
        login: {
          pass: '',
          user: '',
        },
        rules2: {
          user: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('/dashBoard')
          } else {
            return false;
          }
        });
      }
    }
  }
</script>

<style lang="less" scoped>
@import "../common/style/mixin.less";
@import "../common/style/animation.less";
.login{
    width: 100%;
    height: 100%;
    background: url(../common/img/bg.png) no-repeat;
    background-size: cover;
    background-position: center center;
    .center;
    .avatar{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 5px solid #ddd;
        &:hover{
            .rotate;
        }
    }
    .login-form{
        width: 400px;
        height: 300px;
        margin-top:30px;
        position: relative;
        background: rgba(255,255,255,0.1);
        padding: 50px 30px 0 30px;
        border-radius: 5px;
        color: #fff;
        &::before{
            content: "";
            position: absolute;
            top: -20px;
            left: 50%;
            width:0;
            height:0;
            margin-left:-10px;
            border-left:13px solid transparent;
            border-right:13px solid transparent;
            border-bottom:20px solid rgba(255,255,255,0.1);
            z-index: 1000;
        }
        & /deep/ .el-form-item__label{
            color: #fff!important;
        }
        & /deep/ .el-form-item__content{
            margin-left:0!important;
        }
        .gradient-btn{
            width: 100%;
            .gradient-blue;
            border: 0;
            letter-spacing: 2px;
            box-shadow: 0 0 10px #397799;
            &:hover{
                opacity: 0.8;
            }
        }
        i{
            padding-left: 5px;
        }
        .tip{
            color: #fff;
            font-size: 14px;
        }
    }
}
</style>
