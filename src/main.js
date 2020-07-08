import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/iconfont.css';
import global from '@/assets/css/global.scss';
import Cookies from 'js-cookie';
Vue.use(ElementUI, {
    size: Cookies.get('size') || 'medium'
});
Vue.config.productionTip = false;
Vue.prototype.$global = global;
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
