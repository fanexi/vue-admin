<template>
    <div class="app-wrapper hideSidebar mobile">
        <Sidebar :isCollapse="isCollapse"></Sidebar>
        <Navbar @setIsCollapse="setIsCollapse"></Navbar>
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
        return {
            isCollapse: ''
        };
    },
    components: {
        Sidebar,
        Navbar,
        TagView
    },
    methods: {
        setIsCollapse(val) {
            this.isCollapse = val;
        }
    }
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
