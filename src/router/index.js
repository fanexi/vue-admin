import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';
import Dashboard from '@/views/dashboard';
Vue.use(VueRouter);
// 需要权限
export const asyncRoutes = [
    {
        path: '/home',
        name: 'home',
        component: Layout,
        meta: {
            title: 'home',
            icon: 'lock',
            roles: ['admin', 'editor'] // you can set roles in root nav
        }
    }
];
const routes = [
    {
        path: '/',
        name: 'dashboard',
        redirect: '/dashboard',
        component: Layout,
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
