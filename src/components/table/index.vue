<template>
    <div class="tableData">
        <el-table border :data="tableData" style="width: 100%">
            <el-table-column
                align="center"
                v-for="(item, index) in table"
                :key="index"
                :prop="item.prop"
                :label="item.label"
                :width="item.width"
            >
                <template slot-scope="scope">
                    <div v-if="item.scope">
                        <soltData :soltData="item.soltData"> </soltData>
                    </div>
                    <div v-else>{{ scope.row[item.prop] || '-' }}</div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import soltData from './solt';
export default {
    data() {
        return {
            table: [
                {
                    prop: 'name',
                    label: '姓名'
                },
                {
                    prop: 'address',
                    label: '地址'
                },
                {
                    prop: 'date',
                    label: '时间',
                    scope: true,
                    width: 200,
                    soltData: [
                        {
                            type: 'btn',
                            value: '删除'
                        },
                        {
                            type: 'btn',
                            value: '增加'
                        },
                        {
                            type: 'btn',
                            value: '修改'
                        }
                    ]
                }
            ],
            tableData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: ''
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }
            ],
            multipleSelection: []
        };
    },
    components: {
        soltData
    },
    methods: {}
};
</script>
