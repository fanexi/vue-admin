export default {
    isCollapse: state => state.layout.isCollapse,
    routes: state => state.layout.routes,
    asyncRoutes: state => state.layout.asyncRoutes,
    resRoutes: state => state.layout.resRoutes,
    tabActive: state => state.layout.tabActive,
    tabList: state => state.layout.tabList,
    tabListPath: state => state.layout.tabListPath,
    routeList: state => state.layout.routeList
};
