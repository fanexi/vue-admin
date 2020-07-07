<template>
    <div
        class="navbar"
        :style="{ width: isCollapse ? global().shrinkNavbar : global().navbar }"
    >
        <el-menu
            :collapse="isCollapse"
            align="left"
            :background-color="global().bgColor"
            :collapse-transition="false"
            :text-color="global().textColor"
            active-text-color="#409eff"
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-5">选项1</el-menu-item>
                    <el-menu-item index="1-5">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'Navbar',
    data() {
        return {};
    },

    created() {},
    computed: {
        ...mapGetters(['isCollapse'])
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        global() {
            return this.$global;
        }
    }
};
</script>
<style lang="scss" scoped>
.navbar {
    position: fixed;
    top: $sidebarHeight;
    bottom: 0;
    left: 0;
    height: $navbarHeight;
    background: $bgColor;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
