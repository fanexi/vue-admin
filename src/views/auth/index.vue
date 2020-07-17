<template>
    <div class="content" ref="content">
        <FormData :FormData="FormData" @handleSubmit="handleSubmit" label="label1" value="id"></FormData>
        <tableData></tableData>
    </div>
</template>
<script>
import FormData from '@/components/form/index.vue';
import tableData from '@/components/table/index.vue';
export default {
    data() {
        return {
            FormData:[]
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
        this.FormData=FormData
    },
    methods: {
        handleSubmit(data){
            console.log(data);
        }
    },
   
};
</script>
<style lang="scss"></style>
