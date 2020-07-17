<template>
    <div class="FormData">
        <el-form ref="form" :model="form" :label-width="labelWidth">
            <el-row>
                <el-col
                    :span="8"
                    v-for="(item, index) in FormData"
                    :key="index"
                >
                    <el-form-item :label="item.label" :prop="item.key">
                        <InputData
                            v-if="item.type == 'input'"
                            :formObj="form"
                            :itemKey="item.key"
                        ></InputData>
                        <SelectData
                            v-if="item.type == 'select'"
                            :formObj="form"
                            :itemKey="item.key"
                            :options="item.options"
                            :label="label"
                            :value="value"
                        ></SelectData>
                        <DatePickerData
                            v-if="
                                item.type == 'date' ||
                                    item.type == 'dates' ||
                                    item.type == 'datetimerange' ||
                                    item.type == 'datetime' ||
                                    item.type == 'daterange'
                            "
                            :formObj="form"
                            :itemKey="item.key"
                            :type="item.type"
                            :valueFormat="valueFormat"
                        ></DatePickerData>
                    </el-form-item>
                </el-col>
                <el-col
                    :span="8"
                    align="right"
                    :offset="
                        this.FormData.length % 3 == 1
                            ? 8
                            : 0 || this.FormData.length % 3 == 0
                            ? 16
                            : 0
                    "
                >
                    <el-form-item>
                        <el-button @click="handleReset">重置</el-button>
                        <el-button type="primary" @click="handleSubmit"
                            >搜索</el-button
                        >
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
import InputData from './input';
import SelectData from './select';
import DatePickerData from './datePicker';
export default {
    name: 'FormData',
    props: {
        // 数据
        FormData: {
            type: Array,
            default: () => {
                return [];
            }
        },
        // form的宽度
        labelWidth: {
            type: String,
            default: '100px'
        },
        // label绑定的值
        label: {
            type: String
        },
        // value绑定的值
        value: {
            type: String
        },
        // 时间格式
        valueFormat: {
            type: String
        }
    },
    data() {
        return {
            form: {}
        };
    },
    components: {
        InputData,
        SelectData,
        DatePickerData
    },
    created() {},
    methods: {
        handleSubmit() {
            console.log(this.form);
            this.$emit('handleSubmit', this.form);
        },
        handleReset() {
            this.$refs.form.resetFields();
        }
    }
};
</script>
<style lang="scss">
.FormData {
    padding-top: $base-padding;
}
</style>
