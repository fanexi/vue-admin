import http from '@/utils/http.js';
import {
    USER_BASE_URL,
    
} from './index';
const {
    loginUrl,
    queryUrl
} = USER_BASE_URL;
export function login(data) {
    return http({
        url: loginUrl,
        method: 'post',
        data
    });
}
export function query(data) {
    return http({
        url: queryUrl,
        method: 'post',
        data
    });
}