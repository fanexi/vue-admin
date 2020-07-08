import { routes } from '@/router';
export default {
    namespaced: true,
    state: {
        isCollapse: false,
        tabList: routes[0].children,
        tabListPath: routes[0].redirect
    },
    mutations: {
        SET_IS_COLLAPSE: (state, data) => {
            state.isCollapse = data;
        },
        SET_TAB_LIST: (state, data) => {
            state.tabList = data;
        },
        INIT_TAB_LIST: state => {
            state.tabList = [routes[0].children[0]];
            state.tabListPath = routes[0].redirect;
        },
        SET_TAB_LIST_PATh: (state, data) => {
            state.tabListPath = data;
        }
    },
    actions: {
        setIsCollapse({ commit }, data) {
            commit('SET_IS_COLLAPSE', data);
        },
        setTablist({ commit, state }, data) {
            commit('SET_TAB_LIST', data);
            let arr = [];
            state.tabList.forEach(item => {
                arr.push(item.path);
            });
            commit('SET_TAB_LIST_PATh', arr);
        },
        initTablist({ commit }) {
            commit('INIT_TAB_LIST');
        }
    }
};
