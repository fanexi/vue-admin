<template>
    <div class="content" ref="content">
        <FormData
            :FormData="FormData"
            valueFormat="yyyy-MM-dd"
            label="label1"
            value="id"
        ></FormData>
    </div>
</template>
<script>
import FormData from '@/components/form/index.vue';
export default {
    data() {
        return {
            FormData: [
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
                    type: 'date'
                },
                {
                    label: '性别',
                    key: 'sex2',
                    type: 'daterange'
                }
            ]
        };
    },
    methods: {},
    created() {},

    components: {
        FormData
    }
};
</script>
<style lang="scss"></style>
