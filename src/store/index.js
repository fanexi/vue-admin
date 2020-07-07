import Vue from 'vue';
import Vuex from 'vuex';
import layout from './modules/layout';
import getters from './getters';
Vue.use(Vuex);

const store = new Vuex.Store({
    namespaced: true,
    modules: {
        layout
    },
    getters
});

export default store;
