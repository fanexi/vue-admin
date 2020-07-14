// 后台返回的数据结构
export const resRoutes = [
    {
        path: '/userManagement',
        meta: { title: '用户管理', icon: 'el-icon-location' },
        children: [
            {
                path: '/userManagement/list',
                meta: {
                    icon: 'el-icon-location',
                    title: '用户管理'
                },
                children: [
                    {
                        path: '/userManagement/role',
                        meta: {
                            icon: 'el-icon-location',
                            title: '角色管理'
                        }
                    },
                    {
                        path: '/userManagement/auth',
                        meta: {
                            icon: 'el-icon-location',
                            title: '用户管理',
                            roles: ['admin']
                        }
                    }
                ]
            }
        ]
    }
];
