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
            router
        >
            <div v-for="item in routes" :key="item.path">
                <el-submenu
                    :index="item.path"
                    v-if="item.children && item.children.length != 0"
                >
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{ item.meta.title }}</span>
                    </template>
                    <div v-for="itemSub in item.children" :key="itemSub.path">
                        <el-submenu
                            v-if="
                                itemSub.children && itemSub.children.length != 0
                            "
                            :index="itemSub.path"
                        >
                            <template slot="title">{{
                                itemSub.meta.title
                            }}</template>
                            <div
                                v-for="itemSubList in itemSub.children"
                                :key="itemSubList.path"
                            >
                                <el-menu-item :index="itemSubList.path">{{
                                    itemSubList.meta.title
                                }}</el-menu-item>
                            </div>
                        </el-submenu>
                        <el-menu-item-group v-else>
                            <el-menu-item :index="itemSub.path">{{
                                itemSub.meta.title
                            }}</el-menu-item>
                        </el-menu-item-group>
                    </div>
                </el-submenu>
                <el-menu-item :index="item.path" v-else>
                    <i class="el-icon-setting"></i>
                    <span slot="title">{{ item.meta.title }}</span>
                </el-menu-item>
            </div>
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

    created() {
    },
    computed: {
        ...mapGetters(['isCollapse','routes'])
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
