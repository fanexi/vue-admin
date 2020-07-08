<template>
    <div class="app-wrapper hideSidebar mobile">
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <TagView></TagView>
        <div
            class="view"
            :style="{
                paddingLeft: isCollapse
                    ? global().shrinkNavbar
                    : global().navbar
            }"
        >
            <section class="app-main">
                <transition name="fade-transform" mode="out-in">
                    <keep-alive :include="tabActive">
                        <router-view :key="key" />
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
    data() {
        return {};
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
        }
    }
};
</script>
<style lang="scss" scoped>
.app-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;

    .view {
        height: $navbarHeight;
        box-sizing: border-box;
        margin: $base-margin;
    }
}
</style>
