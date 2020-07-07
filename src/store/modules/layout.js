import {
  routes
} from '@/router';

export default {
  namespaced: true,
  state: {
    isCollapse: false,
    tablist: routes[0].children
  },

  mutations: {
    SET_IS_COLLAPSE: (state, data) => {
      state.isCollapse = data;
    },
    SET_TAB_LIST: (state, data) => {
      state.tablist = data;
    },
  },
  actions: {
    setIsCollapse({
      commit
    }, data) {
      commit('SET_IS_COLLAPSE', data);
    },
    setTablist({
      commit,
      state
    }, data) {
      let tablist = state.tablist
      if (data.length == 0) return
      let isData = tablist.filter(item => item.path == data[0].path)
      if (isData.length != 0) return;
      commit('SET_TAB_LIST', tablist.concat(data));
    },
  }
};