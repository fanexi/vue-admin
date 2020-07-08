import { asyncRoutes, routes, resRoutes } from '@/router';
export default {
    namespaced: true,
    state: {
        routes: routes,
        asyncRoutes: asyncRoutes,
        resRoutes: resRoutes,
        tabActive: '/dashboard'
    },

    mutations: {
        SET_TAB_ACTIVE: (state, data) => {
            state.tabActive = data;
        }
    },
    actions: {
        setTabActive({ commit }, data) {
            commit('SET_TAB_ACTIVE', data);
        }
    }
};
