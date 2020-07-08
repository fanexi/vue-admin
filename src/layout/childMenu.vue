<template>
    <div class="menu-tree">
        <label v-for="(item, index) in resRoutes" :key="index">
            <el-submenu
                :index="item.path"
                v-if="item.children && item.children != 0"
            >
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span>{{ item.meta.title }}</span>
                </template>
                <child-menu :resRoutes="item.children"></child-menu>
            </el-submenu>
            <el-menu-item v-else :index="item.path">
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span>{{ item.meta.title }}</span>
                </template>
            </el-menu-item>
        </label>
    </div>
</template>

<script>
export default {
    name: 'childMenu',
    props: ['resRoutes'],
    created() {}
};
</script>
