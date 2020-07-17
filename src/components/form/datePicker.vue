<template>
    <div class="datePickerData">
        <el-date-picker
            class="datePicker"
            v-model="formObj[itemKey]"
            :type="type"
            placeholder="选择日期"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            :value-format="valueFormat"
        >
        </el-date-picker>
    </div>
</template>
<script>
export default {
    name: 'datePickerData',
    props: {
        itemKey: {
            type: String
        },
        formObj: {
            type: Object
        },
        type: {
            type: String
        },
        valueFormat: {
            type: String,
            default: 'yyyy-MM-dd HH:mm:ss'
        }
    }
};
</script>
<style lang="scss" scoped>
.datePickerData {
    .datePicker {
        width: 100%;
    }
}
</style>
