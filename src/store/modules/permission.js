import { asyncRoutes, routes, resRoutes } from '@/router';
export default {
    namespaced: true,
    state: {
        routes: routes,
        asyncRoutes: asyncRoutes,
        resRoutes: resRoutes,
        tabActive: routes[0].redirect
    },

    mutations: {
        SET_TAB_ACTIVE: (state, data) => {
            state.tabActive = data;
        },
        INIT_TAB_ACTIVE: state => {
            state.tabActive = routes[0].redirect;
        }
    },
    actions: {
        setTabActive({ commit }, data) {
            commit('SET_TAB_ACTIVE', data);
        },
        initTabActive({ commit }, data) {
            commit('INIT_TAB_ACTIVE', data);
        }
    }
};
