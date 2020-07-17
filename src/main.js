import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/iconfont.css';
import global from '@/assets/css/global.scss';
import Cookies from 'js-cookie';
import './permission'; // permission control
import Echarts from 'echarts';
// import CountTo from 'vue-count-to';
import VueLazyLoad from 'vue-lazyload';
// if (process.env.NODE_ENV === 'development') {
const { mockXHR } = require('../mock');
mockXHR();
// }
// Vue.component('CountTo', CountTo);
Vue.use(ElementUI, {
    size: Cookies.get('size') || 'small'
});
Vue.use(VueLazyLoad, {
    loading: require('@/assets/loadding.gif'),
    error: require('@/assets/loadding.gif')
});
Vue.config.productionTip = false;
Vue.prototype.$global = global;
Vue.prototype.$echarts = Echarts;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
