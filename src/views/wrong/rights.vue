<template>
   <div class="wrong">
   <div class="wrong-page">
       <div class='w-page'>
           <div class="oopas">oopas!</div>
           <div class="no-entery">你没有权限去该页面......</div>
           <div class="check-in">如有不满请联系你领导，或者你可以</div>
           <router-link to="/" style='margin-right:20px;'><el-button type="primary" >返回首页</el-button></router-link>
           <el-button type="primary" @click="$router.back(-1)">返回上一页</el-button>
       </div>
       <div><img src="../../common/img/401.gif" class='w-img'></div>
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
        .w-img{
            width: 300px;
        }
        .w-page{
            width: 300px;
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