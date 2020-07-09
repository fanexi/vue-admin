import axios from 'axios';
import { Message } from 'element-ui';
import store from '@/store';
import { getToken } from '@/utils/auth';
const service = axios.create({
    timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
    config => {
        console.log(config);
        if (store.getters.token) {
            config.headers['X-Token'] = getToken();
        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data;
        if (res.status !== 200) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            });

            return Promise.reject(new Error(res.message || 'Error'));
        } else {
            return res;
        }
    },
    error => {
        console.log('err' + error);
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
);

export default service;
