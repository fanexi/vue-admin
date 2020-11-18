<template>
    <div class="menu-tree">
        <label v-for="(item, index) in asyncRoutes" :key="index">
            <el-submenu
                :index="item.path"
                v-if="item.children && item.children != 0"
            >
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span>{{ item.meta.title }}</span>
                </template>
                <child-menu :asyncRoutes="item.children"></child-menu>
            </el-submenu>
            <el-menu-item v-else :index="item.path">
                <i :class="item.meta.icon"></i>
                <span slot="title">{{ item.meta.title }}</span>
            </el-menu-item>
        </label>
    </div>
</template>

<script>
export default {
    name: 'childMenu',
    props: ['asyncRoutes']
};
</script>
