<template>
    <div
        class="tagView dfacjsb"
        :style="{
            paddingLeft: isCollapse ? global().shrinkNavbar : global().navbar
        }"
    >
        <el-tabs
            v-model="tabKey"
            type="card"
            class="tagContent"
            @tab-click="handleClick"
            @tab-remove="handleRemove"
        >
            <el-tab-pane
                v-for="item in tabList"
                :key="item.path"
                :label="item.meta.title"
                :name="item.path"
                :closable="!isAffix(item)"
            ></el-tab-pane>
        </el-tabs>
        <el-dropdown trigger="click" class="more" @command="handleCommand">
            <span class="operation">
                更多操作<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="refreshRoute">刷新</el-dropdown-item>
                <el-dropdown-item
                    command="closeOthersTags"
                    :disabled="tabList.length > 2 ? false : true"
                    >关闭其他</el-dropdown-item
                >
                <el-dropdown-item
                    command="closeLeftTags"
                    :disabled="getIndexOf() > 1 ? false : true"
                    >关闭左侧</el-dropdown-item
                >
                <el-dropdown-item
                    command="closeRightTags"
                    :disabled="
                        getIndexOf() == tabList.length - 1 ? true : false
                    "
                    >关闭右侧</el-dropdown-item
                >
                <el-dropdown-item
                    command="closeAllTags"
                    :disabled="tabList.length > 1 ? false : true"
                    >关闭全部</el-dropdown-item
                >
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Navbar',
    data() {
        return {
            tabKey: ''
        };
    },
    computed: {
        ...mapGetters([
            'isCollapse',
            'tabList',
            'tabActive',
            'routes',
            'tabListPath'
        ])
    },
    watch: {
        tabKey: function(path) {
            if (path == 0 || !path) return;
            this.$store.dispatch('layout/setTabActive', path);
        },
        tabActive: function(val) {
            this.tabKey = val;
        }
    },
    created() {
        this.tabKey = this.$route.path;
    },
    methods: {
        global() {
            return this.$global;
        },

        isAffix(tag) {
            return tag.meta && tag.meta.affix;
        },
        handleClick(e) {
            this.$router.push(e.name);
        },
        handleRemove(e) {
            let tabList = this.tabList;
            let tabActive = this.tabActive;
            if (e == tabActive) {
                tabList.forEach((item, index) => {
                    if (item.path == e) {
                        const nextTab =
                            tabList[index + 1] || tabList[index - 1];
                        if (nextTab) {
                            if (nextTab) {
                                tabActive = nextTab.path;
                            }
                        }
                    }
                });
            }
            tabList = tabList.filter(item => item.path != e);
            this.$store.dispatch('layout/setTabActive', tabActive);
            this.$store.dispatch('layout/setTablist', tabList);
            this.$router.push(tabActive);
        },
        handleCommand(command) {
            switch (command) {
                case 'refreshRoute':
                    this.refreshRoute();
                    break;
                case 'closeOthersTags':
                    this.refreshRoute();
                    break;
                case 'closeLeftTags':
                    this.closeLeftTags();
                    break;
                case 'closeRightTags':
                    this.closeRightTags();
                    break;
                case 'closeAllTags':
                    this.closeAllTags();
                    break;
            }
        },
        // 刷新 关闭其他
        refreshRoute() {
            this.$router.go(0);
        },
        // 关闭左侧
        closeLeftTags() {
            let tabList = this.tabList;
            let index = this.getIndexOf();
            tabList = tabList.filter((item, i) => i == 0 || index <= i);
            this.$store.dispatch('layout/setTablist', tabList);
        },
        // 关闭右侧
        closeRightTags() {
            let index = this.getIndex(this.tabActive);
            this.$store.dispatch(
                'layout/setTablist',
                this.tabList.slice(0, index + 1)
            );
        },
        getIndexOf() {
            return this.tabListPath.indexOf(this.tabActive);
        },
        getIndex(path) {
            let index = 0;
            for (let i = 0; i < this.tabList.length; i++) {
                const e = this.tabList[i];
                if (e.path == path) {
                    index = i;
                    break;
                }
            }
            return index;
        },
        // 关闭全部
        closeAllTags() {
            this.$store.dispatch(
                'layout/setTabActive',
                this.routes[0].redirect
            );
            this.$store.dispatch('layout/initTablist');
            this.$router.push(this.routes[0].redirect);
        }
    }
};
</script>
<style lang="scss" scoped>
.tagView {
    position: relative;
    box-sizing: border-box;
    height: $base-tags-bar-height;
    user-select: none;
    margin: $base-margin;
    .tagContent {
        width: $tag-view-tag-width;
        height: $base-tag-item-height;
        ::v-deep {
            .el-tabs__nav-next,
            .el-tabs__nav-prev {
                height: $base-tag-item-height;
                line-height: $base-tag-item-height;
            }

            .el-tabs__header {
                border-bottom: 0;

                .el-tabs__nav {
                    border: 0;
                }

                .el-tabs__item {
                    height: $base-tag-item-height;
                    line-height: $base-tag-item-height;
                    border: 1px solid $base-border-color;
                    margin-right: 5px;
                    border-radius: $base-border-radius;
                    box-sizing: border-box;

                    &.is-active {
                        background: $base-color-blue;
                        color: $base-color-white;
                        border: 1px solid $base-color-blue;
                    }
                }
            }
        }
    }
    .more {
        width: $tag-view-more;
        padding-left: $base-padding;
        height: $base-tag-item-height;
        line-height: $base-tag-item-height;
    }
    .operation {
        cursor: pointer;
    }
}
</style>
