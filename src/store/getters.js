export default {
    isCollapse: state => state.layout.isCollapse,
    routes: state => state.permission.routes,
    asyncRoutes: state => state.permission.asyncRoutes,
    tabActive: state => state.permission.tabActive,
};
