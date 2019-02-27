<template>
   <div>
       <el-card>
           <div slot="header">拖拽vuedraggable:github地址<a target="_blank" href="https://github.com/SortableJS/Vue.Draggable">https://github.com/SortableJS/Vue.Draggable</a> </div>
           <div>
               <draggable v-model="myArray" :options="{group:'people'}" @start="drag=true" @end="drag=false">
                   <div v-for="(element,index) in myArray" :key="index" class="draggable">
                       <span>{{element.name}}</span>
                       <span>
                           {{index}}
                           <i class="fa fa-unsorted (alias)"></i>
                        </span>
                    </div>
               </draggable>
           </div>
       </el-card>
   </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
    components:{draggable},
    data(){
        return{
            myArray:[
                {id:0,name:'小红'},
                {id:1,name:'小明'},
                {id:2,name:'小志'},
                {id:3,name:'小刚'},
                {id:4,name:'小美'}
            ]
        }
    }
}
</script>

<style lang='less' scoped>
@import "~common/style/mixin.less";
.draggable{
    .flex(space-between);
    padding: 10px;
    border:1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    cursor: pointer;
    span{
        margin-right: 20px
    }
    i{
        margin-right: 20px;
    }  
}
</style>