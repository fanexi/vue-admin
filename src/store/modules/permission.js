import { asyncRoutes, routes } from '@/router';
export default {
    namespaced: true,
    state: {
        routes: routes,
        asyncRoutes: asyncRoutes,
        tabActive: routes[0].children[0].path
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
