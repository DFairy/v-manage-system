import Vue from 'vue'
import Router from 'vue-router'

const Login = () =>
    import ('views/login.vue')
const Home = () =>
    import ('views/layout/index.vue')
    //首页
const dashBoard = () =>
    import ('views/dashBoard/index.vue')
    // editor
const wangEditor = () =>
    import ('views/editor/wangEditor.vue')
const quillEditor = () =>
    import ('views/editor/quillEditor.vue')
const mavonEditor = () =>
    import ('views/editor/mavonEditor.vue')
    //插件
const vueDraggable = () =>
    import ('views/componentPage/vueDraggable.vue')
    //错误页    
const View404 = () =>
    import ('views/wrong/404.vue')
const Rights = () =>
    import ('views/wrong/rights.vue')
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home,
            redirect: '/dashBoard',
            children: [{
                    path: '/dashBoard',
                    component: dashBoard,
                    name: '系统首页',
                    meta: { icon: 'fa-home', title: '系统首页' },
                },
                {
                    path: '/component',
                    meta: { icon: 'fa-th-large', title: '组件' },
                    component: { render(c) { return c('router-view') } },
                    name: '组件',
                    redirect: '/component/vueDraggable',
                    children: [{
                        path: '/component/vueDraggable',
                        component: vueDraggable,
                        name: '拖拽',
                        meta: { title: '拖拽' }
                    }]
                },
                {
                    path: '/editor',
                    component: { render(c) { return c('router-view') } },
                    name: '编辑器',
                    meta: { icon: 'fa-edit (alias)', title: '编辑器' },
                    redirect: '/editor/wangEditor',
                    children: [{
                            path: '/editor/wangEditor',
                            component: wangEditor,
                            name: 'wangEditor',
                            meta: { title: 'wangEditor' }
                        },
                        {
                            path: '/editor/quillEditor',
                            component: quillEditor,
                            name: 'quillEditor',
                            meta: { title: 'quillEditor' }
                        },
                        {
                            path: '/editor/mavonEditor',
                            component: mavonEditor,
                            name: 'mavonEditor',
                            meta: { title: 'mavonEditor' }
                        }
                    ]
                },
                {
                    path: '/wrong',
                    name: '错误页面',
                    meta: { title: '错误页面', icon: 'fa-bullhorn' },
                    component: { render(c) { return c('router-view') } },
                    redirect: '/wrong/view404',
                    children: [{
                            path: '/wrong/view404',
                            component: View404,
                            name: '404页面',
                            meta: { title: '404页面' }
                        },
                        {
                            path: '/wrong/rights',
                            component: Rights,
                            name: '权限页面',
                            meta: { title: '权限页面' }
                        }
                    ]
                },
            ]
        }
    ]
})