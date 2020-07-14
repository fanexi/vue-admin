<template>
    <el-menu
        :background-color="global().bgColor"
        :collapse-transition="false"
        :text-color="global().textColor"
        active-text-color="#20a0ff"
        router
        unique-opened
        :collapse="isCollapse"
        :default-active="$route.path"
        @select="handleSelect"
        :default-openeds="openList"
        @open="handleOpen"
    >
        <ChildMenut :asyncRoutes="asyncRoutes"></ChildMenut>
    </el-menu>
</template>
<script>
import ChildMenut from './childMenu';
import { mapGetters } from 'vuex';

export default {
    name: 'Menu',
    data() {
        return {
            openList: [],
            closeLst: [] //点击左侧不可以展开
        };
    },
    components: {
        ChildMenut
    },
    computed: {
        ...mapGetters([
            'isCollapse',
            'asyncRoutes',
            'tabActive',
            'routes',
            'tabList',
            'tabListPath',
            'routeList'
        ])
    },
    watch: {
        tabActive: function(val) {
            if (this.closeLst.length != 0) {
                this.closeLst.forEach(item => {
                    if (val == item.path) this.openList = [];
                });
            } else if (val == '/dashboard') this.openList = [];
        }
    },
    mounted() {
        this.closeLst = this.asyncRoutes.filter(item => !item.children);
        this.handleSelect(this.$route.path);
    },
    methods: {
        global() {
            return this.$global;
        },

        handleSelect(key) {
            this.$store.dispatch('layout/setTabActive', key);
            if (this.tabListPath.includes(key)) return;
            console.log(this.routeList);

            let data = this.routeList.filter(item => item.path == key);
            let tabList = this.tabList;
            if (data[0]) {
                tabList.push(data[0]);
            }
            this.$store.dispatch('layout/setTablist', tabList);
        },
        handleOpen() {}
    }
};
</script>
