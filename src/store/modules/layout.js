export default {
    namespaced: true,
    state: {
        isCollapse: false
    },

    mutations: {
        SET_IS_COLLAPSE: (state, data) => {
            state.isCollapse = data;
        }
    },
    actions: {
        setIsCollapse({ commit }, data) {
            commit('SET_IS_COLLAPSE', data);
        }
    }
};
