<template>
    <div class="app-wrapper hideSidebar mobile">
        <Sidebar></Sidebar>
        <Navbar></Navbar>
        <TagView></TagView>
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
    created() {},
    methods: {}
};
</script>
<style lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
}
</style>
