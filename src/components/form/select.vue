<template>
    <div class="selectData">
        <el-select
            class="select"
            v-model="formObj[itemKey]"
            placeholder="请选择"
        >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item[label]"
                :value="item[value]"
            >
            </el-option>
        </el-select>
    </div>
</template>
<script>
export default {
    name: 'selectData',
    props: {
        itemKey: {
            type: String
        },
        formObj: {
            type: Object
        },
        options: {
            type: Array,
            default: () => {
                return [];
            }
        },
        label: {
            type: String,
            default: 'label'
        },
        value: {
            type: String,
            default: 'value'
        }
    }
};
</script>
<style lang="scss">
.selectData {
    .select {
        width: 100%;
    }
}
</style>
