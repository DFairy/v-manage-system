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
  margin: 10px;
  /*84 = navbar + tags-view = 50 +34 */
  /* min-height: calc(100vh - 84px); */
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>