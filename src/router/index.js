import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';
import Dashboard from '@/views/dashboard';
import Login from '@/views/login';
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);
// 需要权限
export const asyncRoutes = [
    {
        path: '/Login',
        name: 'Login',
        meta: { title: '登录', icon: 'el-icon-location' },
        component: Layout,
        children: [
            {
                path: '/Login/Login1',
                component: Login,
                name: 'Login',
                meta: { title: '登录', icon: 'dashboard' }
            },
            {
                path: '/Login/Login2',
                component: Login,
                name: 'Login1',
                meta: { title: '登录', icon: 'dashboard' }
            }
        ]
    }
];
export const routes = [
    {
        path: '/',
        name: 'dashboard',
        redirect: '/dashboard',
        component: Layout,
        meta: { title: 'Dashboard', icon: 'el-icon-location', affix: true },
        children: [
            {
                path: '/dashboard',
                component: Dashboard,
                name: 'Dashboard',
                meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
            }
        ]
    },
    ...asyncRoutes
];
const router = new VueRouter({
    routes
});
export default router;
