<template>
    <div class="sidebar">
        <div class="logo">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                <el-radio-button :label="false">展开</el-radio-button>
                <el-radio-button :label="true">收起</el-radio-button>
            </el-radio-group>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Sidebar',
    data() {
        return {
            isCollapse: false
        };
    },
    watch: {
        isCollapse: function(val) {
            this.$emit('setIsCollapse', val);
        }
    }
};
</script>
<style lang="scss" scoped>
.sidebar {
    width: 100%;
    height: $sidebarHeight;
    background: $bgColor;
    position: relative;
    .logo {
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>
