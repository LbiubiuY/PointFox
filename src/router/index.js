import Vue from 'vue';
import VueRouter from 'vue-router';
import Student from '../components/Student.vue'
import Main from '../components/Main.vue'
import Class from '../components/Class.vue'
import Inform from '../components/Inform.vue'
import Grade from '../components/Grade.vue'
import Work from '../components/Work.vue'
import Book from '../components/Book.vue'
import Chaxun from '../components/Chaxun.vue'
import CNNode from '../components/CNNode.vue'
//安装插件
Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/student',
            component: Student,
            children: [
                {
                    path: '/',
                    redirect: '/inform'
                },
                {
                    path: "/inform",
                    component: Inform,
                },
                {
                    path: "/class",
                    component: Class,
                },
                {
                    path:'/grade',
                    component: Grade
                },
                {
                    path: '/chaxun',
                    component: Chaxun
                }
            ]
        },
        {
            path: '/main',
            component: Main
        },
        {
            path:'/work',
            component:Work
        },
        {
            path:'/book',
            component:Book
        },
        {
            path:'/cnnode',
            component:CNNode
        }
        
    ]
});

