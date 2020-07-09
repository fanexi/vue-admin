import user from '@/api/user';
const { login } = user;
export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        getLogin: async (state, params) => {
            try {
                let { data } = await login(params);
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    }
};
