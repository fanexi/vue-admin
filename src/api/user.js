import http from '@/utils/http.js';
import { USER_BASE_URL } from './index';
const { loginUrl } = USER_BASE_URL;
export function login(data) {
    return http({
        url: loginUrl,
        method: 'post',
        data
    });
}
