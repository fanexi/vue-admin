<template>
    <div class="soltData dfacjsb">
        <div v-for="(item, index) in soltData" :key="index">
            <el-button v-if="item.type == 'button'" :type="item.typeBtn">{{ item.value }}</el-button>
            <p class="text" v-else>{{ item.value }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'soltData',
    props: {
        soltData: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    created() {
    }
};
</script>
<style lang="scss" scoped>
.soltData {
    .text {
        color: #409eff;
        cursor: pointer;
    }
}
</style>
