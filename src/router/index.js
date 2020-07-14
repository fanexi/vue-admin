import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';
// 路由懒加载
const Dashboard = () => import('@/views/dashboard');
const Login = () => import('@/views/login');
const User = () => import('@/views/user');
const EmptyLayout = () => import('@/layout/emptyLayout');
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
        children: [
            {
                path: '/userManagement/list',
                name: 'userManagementList',
                meta: {
                    icon: 'el-icon-location',
                    title: '用户管理'
                },
                component: EmptyLayout,
                children: [
                    {
                        path: '/userManagement/role',
                        name: 'userManagementRole',
                        meta: {
                            icon: 'el-icon-location',
                            title: '角色管理'
                        },
                        component: EmptyLayout,
                        children: [
                            {
                                path: '/userManagement/role/list',
                                name: 'userManagementRoleLIst',
                                meta: {
                                    icon: 'el-icon-location',
                                    title: 'zi角色管理'
                                },
                                component: Login
                            }
                        ]
                    },
                    {
                        path: '/userManagement/auth',
                        name: 'userManagementAuth',
                        meta: {
                            icon: 'el-icon-location',
                            title: '用户管理',
                            roles: ['admin']
                        },
                        component: User
                    }
                ]
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
    ...asyncRoutes
];
const router = new VueRouter({
    routes
});
export default router;
