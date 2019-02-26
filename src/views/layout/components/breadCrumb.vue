<template>
<div>
    <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
            <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{
            generateTitle(item.meta.title) }}</span>
            <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</div>
</template>

<script>
export default {
    data(){
        return{
            levelList:null
        }
    },
    watch: {
        // $route() {
        // this.getBreadcrumb()
        // }
    },
    created(){
        this.getBreadcrumb()
    },
    methods:{
        getBreadcrumb(){
            let matched = this.$route.matched.filter(item => item.name)
            console.log(matched)
            const first = matched[0]
            if (first && first.name.trim().toLocaleLowerCase() !== 'dashboard'.toLocaleLowerCase()) {
                matched = [{ path: '/dashBoard', meta: { title: '系统首页' }}].concat(matched)
            }
            this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
            console.log(this.levelList)
        },
        handleLink(item){

        },
        generateTitle(title){

        }
    }
}
</script>

<style lang='less' scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>