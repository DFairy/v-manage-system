<template>
<div class="wrong">
   <div class="wrong-page">
       <div><img src="../../common/img/404.png" class='w-img'></div>
       <div class='w-page'>
           <div class="oopas">oopas!</div>
           <div class="no-entery">网管说这个页面你不能进......</div>
           <div class="check-in">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
           <router-link to="/"><el-button type="primary" >返回首页</el-button></router-link>
       </div>
   </div>
</div>

</template>

<script>
export default {
}
</script>

<style lang='less' scoped>
@import "~common/style/mixin.less";
@import "~common/style/animation.less"; 
.wrong{
    width: 100%;
    height: 100%;
    .center;
    .wrong-page{
        .flex(flex-start);
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%,-50%);
        .w-img{
            width: 500px;
        }
        .w-page{
            width: 300px;
            // opacity: 0;
            .info;
            .oopas{
                font-size: 32px;
                font-weight: bold;
                color: #1482f0;
                line-height: 50px;
            }
            .no-entery{
                font-size: 20px;
                font-weight: bold;
                color: #000;
                line-height: 40px;
                margin-bottom: 20px;
            }
            .check-in{
                font-size: 13px;
                line-height: 20px;
                margin-bottom: 20px;
                color: grey;
            }
        }
    }
}
</style>