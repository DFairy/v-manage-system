<template>
    <div>
        <el-card>
            <div slot="header">mavonEditor:github地址 <a href="https://github.com/hinesboy/mavonEditor" target="blank">https://github.com/hinesboy/mavonEditor</a> </div>
            <div>
               <mavon-editor style="height: 100%" v-model="value" ref="md" @change="change"></mavon-editor>
            </div>
        </el-card>
        <el-button type="primary" @click="submit" style="margin-top:20px" >提交内容</el-button>
        <el-input v-model="valuetxt" type="textarea" :rows="10" style="margin-top:20px" ></el-input>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    components:{mavonEditor},
    data(){
        return{
            value:'',
            valuetxt:'',
            html:''
        }
    },
    methods:{
        change(value,render){
            // render 为 markdown 解析后的结果
            this.html=render
            console.log(this.html)
        },
        submit(){
            this.valuetxt=this.html
            console.log(mavonEditor.getMarkdownIt)
            console.log(this.$refs.md.markdownIt)
        }
    }
}
</script>

<style lang='less' scoped>
</style>