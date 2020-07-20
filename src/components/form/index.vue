<template>
    <div class="FormData">
        <div class="panel-header dfac">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="panel-boay">
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
        },
        form: {
            type: Object
        }
    },
    data() {
        return {};
    },
    components: {
        InputData,
        SelectData,
        DatePickerData
    },
    created() {},
    methods: {
        handleSubmit() {
            this.$emit('handleSubmit');
        },
        handleReset() {
            this.$refs.form.resetFields();
        }
    }
};
</script>
<style lang="scss">
.FormData {
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    border: 1px solid #ebeef5;
    .panel-boay {
        margin: 20px;
    }
    .panel-header {
        background-color: #f5f5f5;
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        border-bottom: 1px solid #ebeef5;
        color: #606266;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        font-size: 14px;
    }
}
</style>
