<template>
  <div class="tags" v-if="showTags">
    <ul class="tags-list">
      <li v-for="(tag,index) in tagsList" :key="index" :class="{'active': isActive(tag.path)}">
        <div class="tags-list-title"><router-link :to="tag.path">{{tag.title}}</router-link></div>
        <i class="el-icon-close" @click="closeTag(index)"></i>
      </li>
    </ul>
    <el-dropdown trigger="click" @command="handleCommand">
        <el-button size="mini" type="primary">
            标签选项<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu size="small" slot="dropdown">
            <el-dropdown-item command="other" @click="closeOther">关闭其他</el-dropdown-item>
            <el-dropdown-item command="all" @click="closeAll">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import bus from './bus.js'
export default {
    data() {
        return {
            tagsList: []
        }
    },
    methods: {
      isActive(route){
        return route===this.$route.fullPath
      },
      //删除单个
      closeTag(index){
        const delTag=this.tagsList.splice(index,1)[0]
        const item=this.tagsList[index]?this.tagsList[index]:this.tagsList[index-1]
        if(item){
          delTag.path===this.$route.fullPath&&this.$router.push(item.path)
        }else{
          this.$router.push('/dashBoard')
        }
      },
      //删除所有
      closeAll(){
        this.tagsList=[]
        this.$router.push('/dashBoard')
      },
      //关闭其他
      closeOther(){
        const curTag=this.tagsList.filter(item=>{
          return item.path===this.$route.fullPath
        })
        this.tagsList=curTag
      },
      handleCommand(command) {
        command === 'other' ? this.closeOther() : this.closeAll();
      },
      // 设置标签
      setTags(route){
          const isExist = this.tagsList.some(item => {
              return item.path === route.fullPath;
          })
          if(!isExist){
              if(this.tagsList.length >= 8){
                  this.tagsList.shift();
              }
              this.tagsList.push({
                  title: route.meta.title,
                  path: route.fullPath
                  // name: route.matched[1].components.default.name
              })
          }
          bus.$emit('tags', this.tagsList);
      }
    },
    computed: {
        showTags() {
            return this.tagsList.length > 0;
        }
    },
    watch:{
      $route(newVal){
        this.setTags(newVal)
      }
    },
    created(){
        this.setTags(this.$route);
    }
}
</script>

<style lang='less' scoped>
@import '~common/style/mixin.less';
.tags {
   .flex(space-between);
  width: 100%;
  background: #fff;
  padding:3px 10px;
  box-shadow: 1px 1px 5px #ddd;
  border-left: 1px solid #eee;
  .tags-list {
    .flex(flex-start);
    li {
      .flex(flex-start);
      border: 1px solid #e9eaec;
      background: #fff;
      padding: 3px 5px;
      margin-right: 10px;
      border-radius: 5px;
      cursor: pointer;
      i{
          font-size: 10px;
      }
      .tags-list-title {
        max-width: 90px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 5px;
        color: #666;
        font-size: 12px;
      }
      .tags-list-title a{
        color: #666;
      }
      &.active{
        border: 1px solid #409eff;
        background-color: #409eff;
        color: #fff!important;
      }
      &.active:hover{
        opacity: 0.8;
      }
      &.active /deep/ .tags-list-title a{
        color: #fff!important;
      }
    }
  }
  .tags-button{
     padding: 3px 10px;
      border: 1px solid #409eff;
      background-color: #409eff;
      color: #fff;
  }
}
</style>