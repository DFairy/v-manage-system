import Vue from 'vue'
import Router from 'vue-router'

const Login = () =>
    import ('views/login.vue')
const Home = () =>
    import ('views/layout/index.vue')
const DashBoard = () =>
    import ('views/dashBoard.vue')
    // const wangEditor = () =>
    //     import ('views/Editor/wangEditor.vue')
    // const quillEditor = () =>
    //     import ('views/Editor/quillEditor.vue')
    // const mavonEditor = () =>
    //     import ('views/Editor/mavonEditor.vue')
    // const tinymceEditor = () =>
    //     import ('views/Editor/tinymceEditor.vue')
const vueDraggable = () =>
    import ('views/componentPage/vueDraggable.vue')
const View404 = () =>
    import ('views/404.vue')
const Rights = () =>
    import ('views/rights.vue')
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home'
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
                    component: DashBoard,
                    name: '系统首页',
                    meta: { icon: 'fa-home', title: '系统首页' },
                },
                {
                    path: '/component',
                    meta: { icon: 'fa-th-large', title: '组件' },
                    component: { render(c) { return c('router-view') } },
                    redirect: '/component/vueDraggable',
                    children: [{
                        path: '/component/vueDraggable',
                        component: vueDraggable,
                        name: '拖拽',
                        meta: { title: '拖拽' }
                    }]
                },
                // {
                //     path: '/editor',
                //     component: { render(c) { return c('router-view') } },
                //     meta: { title: '编辑器' },
                //     icon: 'fa-edit (alias)',
                //     children: [{
                //             path: '/editor/wangEditor',
                //             component: wangEditor,
                //             meta: { title: 'wangEditor' }
                //         },
                //         {
                //             path: '/editor/quillEditor',
                //             component: quillEditor,
                //             meta: { title: 'quillEditor' }
                //         },
                //         {
                //             path: '/editor/mavonEditor',
                //             component: mavonEditor,
                //             meta: { title: 'mavonEditor' }
                //         },
                //         {
                //             path: '/editor/tinymceEditor',
                //             component: tinymceEditor,
                //             meta: { title: 'tinymceEditor' }
                //         }
                //     ]
                // },
                {
                    path: '/wrong',
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