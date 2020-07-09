// 后台返回的数据结构
export const resRoutes = [
    {
        path: '/userMan',
        meta: {
            title: '用户管理',
            icon: 'el-icon-location'
        }
    },
    {
        path: '/auth',
        meta: {
            title: '权限管理',
            icon: 'el-icon-location'
        },
        children: [
            {
                path: '/user',
                meta: {
                    title: '用户',
                    icon: 'el-icon-location'
                },
                children: [
                    {
                        path: '/auth/user/list',
                        meta: {
                            title: '子用户',
                            icon: 'el-icon-location'
                        }
                    },
                    {
                        path: '/auth/role/list',
                        meta: {
                            title: '子角色',
                            icon: 'el-icon-location'
                        }
                    }
                ]
            },
            {
                path: '/role',

                meta: {
                    title: '角色',
                    icon: 'el-icon-location'
                }
            }
        ]
    }
];
