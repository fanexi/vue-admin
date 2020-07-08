export default {
    isCollapse: state => state.layout.isCollapse,
    routes: state => state.permission.routes,
    asyncRoutes: state => state.permission.asyncRoutes,
    resRoutes: state => state.permission.resRoutes,
    tabActive: state => state.permission.tabActive,
    tablist: state => state.layout.tablist
};
