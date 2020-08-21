import {
    login,
    query
} from '@/api/user';
import {
    getToken,
    setToken
} from '@/utils/auth';

export default {
    namespaced: true,
    state: {
        token: getToken()
    },
    mutations: {
        SET_TOKEN: (state, data) => {
            state.token = data;
        }
    },
    actions: {
        getLogin: async ({
            commit
        }, params) => {
            try {
                let {
                    data
                } = await login(params);
                setToken(data.token);
                commit('SET_TOKEN', data.token);
            } catch (error) {
                console.log(error);
            }
        },
        getQuery: async (state,params) => {
            try {
                let {
                    data
                } = await query(params);
                return data
            } catch (error) {
                console.log(error);
            }
        }
    }
};