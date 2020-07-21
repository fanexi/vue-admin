import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';
// 路由懒加载
const Dashboard = () => import('@/views/dashboard');
const Login = () => import('@/views/login');
const User = () => import('@/views/user');
const Auth = () => import('@/views/auth');
const Home = () => import('@/views/home');
// const EmptyLayout = () => import('@/layout/emptyLayout'); //三级菜单或以上配置
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};
Vue.use(VueRouter);
// 需要登录,可以配置权限
export const asyncRoutes = [
    {
        path: '/userManagement',
        name: 'userManagement',
        meta: { title: '用户管理', icon: 'el-icon-location' },
        component: Layout,
        redirect: '/userManagement/list',
        children: [
            {
                path: '/userManagement/list',
                name: 'userManagementList',
                component: User,
                meta: {
                    icon: 'el-icon-location',
                    title: '无限瀑布流布局'
                }
            }
        ]
    },
    {
        path: '/auth',
        name: 'auth',
        meta: { title: '用户管理', icon: 'el-icon-location' },
        component: Layout,
        redirect: '/auth',
        children: [
            {
                path: '/auth',
                name: 'authList',
                component: Auth,
                meta: {
                    icon: 'el-icon-location',
                    title: '用户'
                }
            },
            {
                path: '/home',
                name: 'home',
                component: Home,
                meta: {
                    icon: 'el-icon-location',
                    title: '测试'
                }
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
                    title: '首页',
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
    ...asyncRoutes,
    { path: '*', redirect: '/' } //路由错误的时候跳转到默认页面
];
const router = new VueRouter({
    routes
});
export default router;
