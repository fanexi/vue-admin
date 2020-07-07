<template>
    <div
        class="navbar"
        :style="{ width: isCollapse ? global().shrinkNavbar : global().navbar }"
    >
        <el-menu
            :collapse="isCollapse"
            :default-active="tabActive"
            :background-color="global().bgColor"
            :collapse-transition="false"
            :text-color="global().textColor"
            active-text-color="#20a0ff"
            router
            @select="handleSelect"
            v-for="(item, index) in asyncRoutes"
            :key="index"           
        >
            <el-submenu
                v-if="item.children && item.children.length != 0"
                :index="item.path"
            >
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{ item.meta.title }}</span>
                </template>
                <div
                    v-for="(itemSub, indexSub) in item.children"
                    :key="indexSub"
                >
                    <el-submenu
                        v-if="itemSub.children && itemSub.children.length != 0"
                        :index="itemSub.path"
                    >
                        <span slot="title">{{ itemSub.meta.title }}</span>
                        <el-menu-item :index="itemSub.path">{{
                            itemSub.meta.title
                        }}</el-menu-item>
                    </el-submenu>
                    <el-menu-item v-else :index="itemSub.path">
                        <template slot="title">
                            <i :class="itemSub.meta.icon"></i>
                            <span slot="title">{{ itemSub.meta.title }}</span>
                        </template>
                    </el-menu-item>
                </div>
            </el-submenu>
            <el-menu-item v-else :index="item.path">
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{ item.meta.title }}</span>
                </template>
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
        ...mapGetters(['isCollapse', 'asyncRoutes', 'tabActive'])
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(key) {
             this.$store.dispatch('permission/setTabActive', key);
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
    z-index: $base-z-index;
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
