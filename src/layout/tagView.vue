<template>
    <div
        class="tagView"
        :style="{
            width: isCollapse
                ? global().navbarWidth
                : global().shrinkNavbarWidth,
            paddingLeft: isCollapse ? global().shrinkNavbar : global().navbar
        }"
    >
        <el-tabs
            v-model="tabKey"
            type="card"
            class="tagContent"
            @tab-click="handleClick"
        >
            <el-tab-pane
                v-for="item in tablist"
                :key="item.path"
                :label="item.meta.title"
                :name="item.path"
                :closable="!isAffix(item)"
            ></el-tab-pane>
        </el-tabs>
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
        ...mapGetters(['isCollapse', 'tablist', 'tabActive'])
    },
    watch: {
        tabKey: function(path) {
            if (path == 0 || !path) return;
            this.$store.dispatch('permission/setTabActive', path);
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
        handleTabRemove() {}
    }
};
</script>
<style lang="scss" scoped>
.tagView {
    position: relative;
    box-sizing: border-box;
    height: $base-tags-bar-height;
    user-select: none;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    margin: $base-margin;
    .tagContent {
        width: calc(100% - 90px);
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
}
</style>
