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
        box-sizing: border-box;
    }
}
</style>
