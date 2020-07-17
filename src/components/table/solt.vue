<template>
    <div class="soltData dfacjsb">
        <div v-for="(item, index) in soltData" :key="index">
            <el-button v-if="item.type == 'btn'">{{ item.value }}</el-button>
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
        console.log(this.soltData);
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
