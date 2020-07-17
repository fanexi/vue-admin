<template>
    <div class="app-wrapper openSidebar" v-cloak>
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <div
            class="view"
            :style="{
                paddingLeft: isCollapse
                    ? global().shrinkNavbar
                    : global().navbar
            }"
        >
            <TagView></TagView>
            <section class="app-main">
                <transition name="fade-transform" mode="out-in">
                    <keep-alive :include="tabActive">
                        <router-view v-if="isRouterAlive" :key="key" />
                    </keep-alive>
                </transition>
            </section>
        </div>
    </div>
</template>
<script>
import Sidebar from './sidebar';
import Navbar from './navbar';
import TagView from './tagView';
import { mapGetters } from 'vuex';
export default {
    name: 'Layout',
    provide() {
        return {
            reload: this.reload
        };
    },
    data() {
        return {
            isRouterAlive: true
        };
    },
    components: {
        Sidebar,
        Navbar,
        TagView
    },
    computed: {
        ...mapGetters(['isCollapse', 'tabActive']),
        key() {
            return this.$route.path;
        }
    },
    watch: {
        // 用户手动改变路由地址,重新赋值
        $route: {
            handler: function(route) {
                const path = route.path;
                if (this.tabActive !== path) {
                    this.$store.dispatch('layout/setTabActive', path);
                }
            },
            immediate: true
        }
    },
    created() {},
    methods: {
        global() {
            return this.$global;
        },
        reload() {
            // 刷新页面
            this.isRouterAlive = false;
            this.$nextTick(function() {
                this.isRouterAlive = true;
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .view {
        height: $navbarHeight;
        background: $base-bg-color-default;
        overflow: auto;
        padding-bottom: $base-padding;
        box-sizing: border-box;
        .app-main {
            padding: $base-tags-bar-height $base-padding $base-padding;
            margin: $base-margin-default;
            background: $base-color-white;
            border-radius: 4px;
            -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
            border: 1px solid #ebeef5;
            height: calc(
                100% - #{$base-margin-default} - #{$base-margin-default}
            );
            box-sizing: border-box;
            overflow: auto;
        }
    }
}
</style>
