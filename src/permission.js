import router from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/auth';
import getPageTitle from '@/utils/get-page-title';
const whiteList = ['/login', '/dashboard'];
NProgress.configure({ showSpinner: false });
router.beforeEach(async (to, from, next) => {
    NProgress.start();
    document.title = getPageTitle(to.meta.title);
    const hasToken = getToken();
    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' });
            NProgress.done();
        } else {
            // 判断用户是否拥有权限
            next();
            NProgress.done();
        }
    } else {
        /* has no token*/

        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next(`/login?redirect=${to.path}`);
            NProgress.done();
        }
    }
});

router.afterEach(() => {
    // finish progress bar
    NProgress.done();
});
