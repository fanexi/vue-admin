<template>
    <div class="app-wrapper hideSidebar mobile">
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <TagView></TagView>
        <div class="view" :style="{width:isCollapse?global().navbarWidth:global().shrinkNavbarWidth,paddingLeft:isCollapse?global().shrinkNavbar:global().navbar}">
                <router-view />
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
        ...mapGetters(['isCollapse'])
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
    .view {
        height: $navbarHeight;        
        box-sizing: border-box;
        margin: 30px;
    }
}
</style>
