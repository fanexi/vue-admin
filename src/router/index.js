import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';
import Dashboard from '@/views/dashboard';
import Login from '@/views/login';
Vue.use(VueRouter);
// 需要权限
export const asyncRoutes = [
    {
        path: '/',
        name: 'Login',
        meta: { title: '登录', icon: 'el-icon-location' },
        redirect: '/Login',
        component: Layout,
        children: [
            {
                path: 'Login',
                component: Login,
                name: 'Login',
                meta: { title: '登录', icon: 'dashboard' }
            },
            {
                path: 'Login2',
                component: Login,
                name: 'Login',
                meta: { title: '登录', icon: 'dashboard' }
            },
            {
                path: 'Login3',
                component: Login,
                name: 'Login',
                meta: { title: '登录', icon: 'dashboard' },
                children: [
                    {
                        path: 'Login',
                        component: Login,
                        name: 'Login',
                        meta: { title: '登录', icon: 'dashboard' }
                    },
                    {
                        path: 'Login2',
                        component: Login,
                        name: 'Login',
                        meta: { title: '登录', icon: 'dashboard' }
                    },
                    {
                        path: 'Login3',
                        component: Login,
                        name: 'Login',
                        meta: { title: '登录', icon: 'dashboard' }
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        name: 'Login',
        meta: { title: '登录', icon: 'el-icon-location' },
        redirect: '/Login',
        component: Layout,
        children: [
            {
                path: 'Login',
                component: Login,
                name: 'Login',
                meta: { title: '登录', icon: 'dashboard' }
            },
            {
                path: 'Login2',
                component: Login,
                name: 'Login',
                meta: { title: '登录', icon: 'dashboard' }
            },
            {
                path: 'Login3',
                component: Login,
                name: 'Login',
                meta: { title: '登录', icon: 'dashboard' },
                children: [
                    {
                        path: 'Login',
                        component: Login,
                        name: 'Login',
                        meta: { title: '登录', icon: 'dashboard' }
                    },
                    {
                        path: 'Login2',
                        component: Login,
                        name: 'Login',
                        meta: { title: '登录', icon: 'dashboard' }
                    },
                    {
                        path: 'Login3',
                        component: Login,
                        name: 'Login',
                        meta: { title: '登录', icon: 'dashboard' }
                    }
                ]
            }
        ]
    },
    
];
export const routes = [
    {
        path: '/',
        name: 'dashboard',
        redirect: '/dashboard',
        component: Layout,
        hidden:true,
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                name: 'Dashboard',
                meta: { title: 'Dashboard', icon: 'dashboard' }
            }
        ]
    },
    ...asyncRoutes
];
const router = new VueRouter({
    routes
});
export default router;
