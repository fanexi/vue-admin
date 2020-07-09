import http from '@/utils/http.js';
import { USER_BASE_URL } from './index';
const { login } = USER_BASE_URL;
export default {
    login: data => {
        return http({
            url: login, // 假地址 自行替换
            method: 'post',
            data
        });
    }
};
