<template>
    <div class="soltData dfacjsa">
        <div v-for="(item, index) in soltData" :key="index">
            <el-button
                v-if="item.type == 'button'"
                @click="handleClick"
                :type="item.typeBtn"
                >{{ item.value }}</el-button
            >
            <p class="text" @click="handleClick" v-else>
                {{ item.value }}
                <i
                    v-if="item.type == 'expand'"
                    :class="
                        up[index] ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
                    "
                ></i>
            </p>
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
        },
        up: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    methods: {
        handleClick() {
            this.$emit('handleClick');
            this.$forceUpdate();
        }
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
