<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="tagsList">
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import bus from './bus'
export default {
  name: 'AppMain',
  data(){
      return{
          tagsList:[]
      }
  },
  created(){
      bus.$on('tags',msg=>{
          let arr=[]
          for(let i=0;i<msg.length;i++){
              msg[i].name&&arr.push(msg[i].name)
          }
          this.tagsList=arr
      })
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  }
}
</script>

<style scoped>
.app-main {
  background: rgb(255, 255, 255);
  margin: 10px;
  height: calc(100% - 108px);
  position: relative;
  overflow: hidden;
  font-size: 14px;
}
</style>