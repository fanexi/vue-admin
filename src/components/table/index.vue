<template>
    <div class="tableData">
        <el-table
            border
            :data="tableData"
            style="width: 100%"
            @selection-change="handleSelectionChange"
            @row-click="handleRowClick"
            ref="multipleTable"
            :row-class-name="tableRowClassName"
        >
            <el-table-column
                v-for="(item, index) in table"
                :key="index"
                align="center"
                :fixed="item.fixed"
                :formatter="item.formatter"
                :prop="item.prop"
                :label="item.label"
                :width="item.width"
                :type="item.type"
                :index="index"
            >
                <template slot-scope="scope">
                    <soltData v-if="item.scope" :soltData="item.soltData">
                    </soltData>
                    <el-checkbox-group
                        v-else-if="
                            item.type === 'selection' || item.type === 'radio'
                        "
                        v-model="multipleSelection"
                        @change="handleChecked(scope.row, item.type)"
                    >
                        <template v-for="(table, tableIndex) in tableData">
                            <el-checkbox
                                v-if="tableIndex == scope.row.index"
                                :key="tableIndex"
                                :label="tableIndex"
                            ></el-checkbox>
                        </template>
                    </el-checkbox-group>
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
                    type: 'selection',
                    width: 60
                },
                // {
                //     label: '#',
                //     type: 'radio',
                //     width: 60
                // },
                {
                    prop: 'name',
                    label: '姓名',
                    width: 300
                },
                {
                    prop: 'sex',
                    label: '性别',
                    width: 300
                },
                {
                    prop: 'address',
                    label: '地址',
                    width: 300
                },
                {
                    prop: 'date',
                    label: '时间',
                    width: 300
                },
                {
                    label: '操作',
                    scope: true,
                    width: 200,
                    fixed: 'right',
                    soltData: [
                        {
                            type: 'button',
                            value: '删除',
                            typeBtn: 'danger'
                        },
                        {
                            type: 'button',
                            value: '增加',
                            typeBtn: 'primary'
                        },
                        {
                            type: 'button',
                            value: '修改',
                            typeBtn: 'warning'
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
            multipleSelection: [],
            selectIndex: ''
        };
    },
    components: {
        soltData
    },
    computed: {
        type: function() {
            return this.table[0] ? this.table[0].type : ''; //默认去数组第一个的type
        }
    },
    mounted() {},
    methods: {
        toggleSelection(row) {
            if (row) {
                this.$refs.multipleTable.toggleRowSelection(row);
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            // 防止是单选框的时候调用事件
            if (this.type == 'selection') {
                this.multipleSelection = [];
                val.forEach(item => {
                    this.multipleSelection.push(item.index);
                });
            }
        },
        handleRowClick(row) {
            if (this.type == 'radio') {
                this.handleRadio(row);
            } else {
                this.toggleSelection(row);
            }
        },
        tableRowClassName({ row, rowIndex }) {
            row.index = rowIndex;
        },
        handleChecked(row, type) {
            if (type == 'radio') {
                this.handleRadio(row);
            } else {
                this.toggleSelection(row);
            }
        },
        handleRadio(row) {
            let index = row.index + '';
            let data = [];
            if (this.selectIndex == index) {
                this.selectIndex = '';
            } else {
                this.selectIndex = row.index;
                data.push(row.index);
            }
            this.multipleSelection = data;
        },
        // 是否选中提示框
        isSelected(msg) {
            if (this.multipleSelection.length == 0) {
                this.$message.error(msg ? msg : '请选择一行！');
                return false;
            }
            return true;
        },
    }
};
</script>
<style lang="scss" scoped>
.tableData {
    /deep/ .el-checkbox__label {
        display: none;
    }
}
</style>
