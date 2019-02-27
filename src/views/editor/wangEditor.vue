<template>
    <div>
        <el-card>
            <div slot='header'>wangEditor:github地址 <a href="https://github.com/wangfupeng1988/wangEditor" target="blank">https://github.com/wangfupeng1988/wangEditor</a> </div>
            <div>
                <div id="editor"></div>    
            </div>
        </el-card>
        <el-button type="primary" @click="submit" style="margin-top:20px" >提交内容</el-button>
        <el-input v-model="value" type="textarea" :rows="10" style="margin-top:20px" ></el-input>
    </div>
</template>

<script>
export default {
    data(){
        return{
            editor:null,
            value:""
        }
    },
    mounted(){
        this.$nextTick(()=>{
            this.initEditor()
        })
    },
    methods:{
        initEditor(){
            let E = require('wangeditor')
            // 创建编辑器
            this.editor = new E(document.getElementById('editor'))
            // 表情面板可以有多个 tab ，因此要配置成一个数组。数组每个元素代表一个 tab 的配置
            this.editor.customConfig.emotions = [
                {
                    // tab 的标题
                    title: '默认',
                    // type -> 'emoji' / 'image'
                    type: 'image',
                    // content -> 数组
                    content: [
                        {
                            alt: '[坏笑]',
                            src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
                        },
                        {
                            alt: '[舔屏]',
                            src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
                        }  
                    ]
                },
                {
                    // tab 的标题
                    title: 'emoji',
                    // type -> 'emoji' / 'image'
                    type: 'emoji',
                    // content -> 数组
                    content: ['😀', '😃', '😄', '😁', '😆']
                }
            ]
            this.editor.create()
            this.editor.txt.html('<p>随便输入...</p>')//设置内容
        },
        submit(){
            this.value=this.editor.txt.html()
        }
    }
}
</script>

<style lang='less' scoped>
</style>