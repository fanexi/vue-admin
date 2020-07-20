<template>
    <div class="content" ref="content">
        <FormData
            :FormData="FormData"
            :form="form"
            @handleSubmit="handleSubmit"
            label="label1"
            value="id"
        ></FormData>
        <tableData></tableData>
    </div>
</template>
<script>
import FormData from '@/components/form/index.vue';
import tableData from '@/components/table/index.vue';
export default {
    data() {
        return {
            form: {
                name: '',
                sex: '',
                sex1: '',
                sex2: []
            } //定义初始化的值,防止重置完成,不能重新赋值
        };
    },
    components: {
        FormData,
        tableData
    },
    created() {
        const FormData = [
            {
                label: '姓名',
                key: 'name',
                type: 'input'
            },
            {
                label: '性别',
                key: 'sex',
                type: 'select',
                options: [
                    {
                        id: '1',
                        label1: '黄金糕'
                    }
                ]
            },

            {
                label: '性别',
                key: 'sex1',
                type: 'datetime'
            },
            {
                label: '性别',
                key: 'sex2',
                type: 'datetimerange'
            }
        ];
        this.FormData = FormData;
    },
    methods: {
        handleSubmit() {
            console.log(this.form);
        }
    }
};
</script>
<style lang="scss"></style>
