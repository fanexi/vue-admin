import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';
// 路由懒加载
const Dashboard = () => import('@/views/dashboard');
const Login = () => import('@/views/login');
const User = () => import('@/views/user');
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};
Vue.use(VueRouter);
// 需要登录,可以配置权限
export const asyncRoutes = [
    {
        path: '/userMan',
        name: '用户管理',
        component: Layout,
        children: [
            {
                path: '/userMan',
                component: User,
                meta: {
                    roles: ['admin']
                }
            }
        ]
    },
    {
        path: '/auth',
        name: '权限管理',
        component: Layout,
        children: [
            {
                name: '用户',
                path: '/user',
                component: User,
                children: [
                    {
                        name: '子用户',
                        path: '/auth/user/list',
                        component: User
                    },
                    {
                        name: '子角色',
                        path: '/auth/role/list',
                        component: User
                    }
                ]
            },
            {
                name: '角色',
                path: '/role',
                component: User
            }
        ]
    }
];
// 需要在permission中whiteList配置path,无需登录
export const routes = [
    {
        path: '/',
        name: 'dashboard',
        redirect: '/dashboard',
        component: Layout,
        meta: {
            title: 'Dashboard',
            icon: 'el-icon-location',
            affix: true
        },
        children: [
            {
                path: '/dashboard',
                component: Dashboard,
                name: 'Dashboard',
                meta: {
                    title: 'Dashboard',
                    icon: 'dashboard',
                    affix: true
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: 'login'
        }
    },
    ...asyncRoutes
];
const router = new VueRouter({
    routes
});
export default router;
