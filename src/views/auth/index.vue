<template>
    <div class="content" ref="content">
        <FormData
            :FormData="FormData"
            :form="form"
            @handleSubmit="handleSubmit"
            label="label1"
            value="id"
        ></FormData>
        <tableData
            :table="table"
            :tableData="tableData"
            childrenKey="subList"
            @load="load"
            @handleClick="handleClick"
            ref="tableData"
        ></tableData>
    </div>
</template>
<script>
import FormData from '@/components/form/index.vue';
import tableData from '@/components/table/index.vue';
import { formatterKey } from '@/utils';

export default {
    name: 'auth',
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
        const table = [
            // {
            //     type: 'selection',
            //     width: 60
            // },
            {
                label: '#',
                type: 'radio',
                width: 80,
                show: true
            },
            {
                type: 'expand',
                width: 1,
                fixed: '',
                show: true
            },
            {
                prop: 'name',
                label: '姓名',
                width: 300,
                show: true
            },
            {
                prop: 'sex',
                label: '性别',
                width: 300,
                show: true,
                formatter: row => {
                    return formatterKey(this, row, [
                        {
                            label: '男',
                            value: 1
                        },
                        {
                            label: '女',
                            value: 0
                        }
                    ]);
                }
            },
            {
                prop: 'address',
                label: '地址',
                width: 300,
                show: true
            },
            {
                prop: 'date',
                label: '时间',
                width: 100,
                show: true
            },
            {
                label: '操作',
                scope: true,
                width: 200,
                show: true,
                soltData: [
                    {
                        type: 'expand',
                        value: '查看套餐',
                        click: 'ViewPackages'
                    }
                ]
            }
        ];
        const subTable = [
            {
                type: 'selection',
                width: 80,
                show: true
            },
            {
                type: 'expand',
                width: 1,
                show: true,
                fixed: ''
            },
            {
                prop: 'sex',
                label: '姓名',
                show: true
            },
            {
                label: '操作',
                scope: true,
                show: true,
                soltData: [
                    {
                        value: '查看',
                        type: 'expand',
                        click: 'Look'
                    }
                ]
            }
        ];
        const tableData = [
            {
                id: 1,
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                table: subTable, //定义table数据
                subList: [
                    {
                        id: 1000,
                        date: '2016-05-02',
                        sex: '男',
                        address: '上海市普陀区金沙江路 1518 弄',
                        table: [
                            //定义table数据
                            {
                                type: 'selection',
                                width: 80,
                                show: true
                            },
                            {
                                prop: 'sex',
                                label: '姓名',
                                show: true
                            },
                            {
                                label: '操作',
                                scope: true,
                                show: true,
                                soltData: [
                                    {
                                        value: '查看11111',
                                        click: 'Look1'
                                    }
                                ]
                            }
                        ],
                        subList: [
                            {
                                id: 1001,
                                date: '2016-05-02',
                                name: '王小虎',
                                address: '上海市普陀区金沙江路 1518 弄'
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            },
            {
                id: 3,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
                // hasChildren: true //设置是否折叠,多选框不会全选
            },
            {
                id: 4,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }
        ];

        this.table = table;
        this.tableData = tableData;
        this.FormData = FormData;
    },
    mounted() {},
    methods: {
        handleSubmit() {
            console.log(this.$refs.tableData.selectData());
            console.log(this.form);
        },
        load(resolve) {
            setTimeout(() => {
                resolve([
                    {
                        id: 31,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    },
                    {
                        id: 32,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }
                ]);
            }, 1000);
        },
        handleClick(scope) {
            this[scope.name](scope);
        },
        handleViewPackages(scope) {},
        handleLook(scope) {
            console.log(scope);
        },
        handleLook1(scope) {
            console.log(scope);
        }
    }
};
</script>
<style lang="scss" scoped></style>
