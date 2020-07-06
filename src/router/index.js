import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';
// import Home from '@/views/home';
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Layout,
        children: []
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});
export default router;
