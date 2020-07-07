<template>
    <div class="app-wrapper hideSidebar mobile">
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <TagView></TagView>
        <router-view  />
    </div>
</template>
<script>
import Sidebar from './sidebar';
import Navbar from './navbar';
import TagView from './tagView';
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
    computed: {},
    created() {
        console.log(this.$route);
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
.app-wrapper {   
    position: fixed;
    width: 100%;
    height: 100%;
    .view {
        padding-left: $navbar;
        background: greenyellow;
        width: $navbarWidth;
        height: $navbarHeight;
    }
}
</style>
