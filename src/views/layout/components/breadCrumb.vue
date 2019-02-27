<template>
<div class="bread">
    <hamburger :toggle-click="toggleClick" :is-active="isCollapse" class="hamburger-container"></hamburger>
    <el-breadcrumb separator="/">
    <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
            <span v-if="item.redirect=='noredirect'||index==levelList.length-1" class="no-redirect">{{
            item.meta.title }}</span>
            <a v-else @click.prevent="handleLink(item)">{{ item.meta.title}}</a>
        </el-breadcrumb-item>
    </transition-group>
    </el-breadcrumb>
</div>
</template>

<script>
import hamburger from 'components/hamburger/index';
import bus from './bus';
export default {
    components:{
      hamburger
   },
    data(){
        return{
            isCollapse:false,
            levelList:null
        }
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    },
    created(){
        this.getBreadcrumb()
    },
    methods:{
        toggleClick(){
            this.isCollapse=!this.isCollapse;
            bus.$emit('collapse',this.isCollapse)
        },
        //获得bread
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.name)
            if(matched[0]&&matched[0].name.trim()!== '系统首页'){
                matched = [{ path: '/dashBoard', meta: { title: '系统首页' }}].concat(matched)
            }
            this.levelList=matched  
        },
        handleLink(item){
            const { redirect, path } = item
            if (redirect) {
                this.$router.push(redirect)
                return
            }
            this.$router.push(path)
        }
    }
}
</script>

<style lang='less' scoped>
@import '~common/style/animation.less';
.bread{
    width: 100%;
    background: #fff;                
    // padding:15px 10px;
    height: 50px;
    line-height: 50px;                                 
    box-shadow: 1px 1px 5px #ddd;
    border-left: 1px solid #eee;
    .hamburger-container {
        // line-height: 46px;
        height: 100%;
        float: left;
        cursor: pointer;
        transition: background .3s;
        &:hover {
        background: rgba(0, 0, 0, .025)
        }
    }
    .el-breadcrumb{
        display: inline-block;
        line-height: 50px;
        padding-top: 2px;
        & /deep/ .el-breadcrumb__item{
            font-size: 13px;
            font-weight: normal;
        }
        .el-breadcrumb__inner,
        .el-breadcrumb__inner a {
            font-weight: 400 !important;
        }
    }
    .no-redirect{
        color: #97a8be;
        cursor: text;
    }
}
//   .app-breadcrumb.el-breadcrumb {
//     display: inline-block;
//     font-size: 14px;
//     line-height: 50px;
//     margin-left: 8px;
//     .no-redirect {
//       color: #97a8be;
//       cursor: text;
//     }
//   }
</style>