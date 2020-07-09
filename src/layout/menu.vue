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
        <childMenut :resRoutes="resRoutes"></childMenut>
    </el-menu>
</template>
<script>
import childMenut from './childMenu';
import { mapGetters } from 'vuex';
// import { deepClone } from '@/utils';

export default {
    name: 'Menu',
    data() {
        return {
            routeList: [],
            openList: [],
            closeLst: [] //点击左侧不可以展开
        };
    },
    components: {
        childMenut
    },
    computed: {
        ...mapGetters([
            'isCollapse',
            'resRoutes',
            'tabActive',
            'routes',
            'tabList',
            'tabListPath'
        ])
    },
    watch: {
        tabActive: function(val) {
            this.closeLst.forEach(item => {
                if (val == item.path || val == '/dashboard') {
                    this.openList = [];
                }
            });
        }
    },
    mounted() {
        this.routeList = this.flatten(this.resRoutes);
        this.closeLst = this.resRoutes.filter(item => !item.children);
        this.handleSelect(this.$route.path);
    },
    methods: {
        global() {
            return this.$global;
        },
        flatten(arr) {
            return [].concat(
                ...arr.map(item => {
                    if (item.children && item.children.length != 0) {
                        return [].concat(item, ...this.flatten(item.children));
                    } else {
                        return [].concat(item);
                    }
                })
            );
        },
        handleSelect(key) {
            this.$store.dispatch('layout/setTabActive', key);
            if (this.tabListPath.includes(key)) return;
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
