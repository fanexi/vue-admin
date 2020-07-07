import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import Cookies from 'js-cookie';
import 'element-ui/lib/theme-chalk/index.css';
import global from '@/assets/css/global.scss';
import '@/assets/css/iconfont.css';
Vue.use(ElementUI, {
    size: Cookies.get('size') || 'medium' // set element-ui default size
});
Vue.config.productionTip = false;
Vue.prototype.$global = global;
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})