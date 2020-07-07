<template>
    <div
        class="navbar"
        :style="{
            width: isCollapse ? global().shrinkNavbar : global().navbar
        }"
    >
        <Menu></Menu>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Menu from './menu';
export default {
    name: 'Navbar',
    data() {
        return {};
    },

    created() {},
    computed: {
        ...mapGetters(['isCollapse'])
    },
    components: {
        Menu
    },
    methods: {
        global() {
            return this.$global;
        }
    }
};
</script>
<style lang="scss" scoped>
.navbar {
    position: absolute;
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
