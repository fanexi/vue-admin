<template>
    <div class="sidebar">
        <div class="logo">
            <span
                @click="isCollapse = !isCollapse"
                class="icon iconfont  masterctrl"
                :class="isCollapse ? 'icon-masterctrl' : 'icon-mirrorlightctrl'"
            ></span>
            <span v-if="!isCollapse" class=" title">我问问</span>
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
    mounted() {
        let that = this;
        window.onresize = function() {
            let screenWidth = document.documentElement.clientWidth;
            if (screenWidth < 1024) {
                that.$store.dispatch('layout/setIsCollapse', true);
                that.isCollapse=true
            } else {
                that.$store.dispatch('layout/setIsCollapse', false);
                that.isCollapse=false
            }
        };
    },
    watch: {
        isCollapse: function(val) {
            this.$store.dispatch('layout/setIsCollapse', val);
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
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        height: 100%;
        .masterctrl {
            color: $textColor;
            font-size: 26px;
        }
        .title {
            font-size: 20px;
            color: $textColor;
            width: 100px;
        }
    }
}
</style>
