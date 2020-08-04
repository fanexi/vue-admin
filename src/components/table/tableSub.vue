<template>
    <div class="tableData">
        <el-table
            border
            :data="tableData"
            style="width: 100%"
            @selection-change="handleSelectionChange"
            ref="multipleTable"
            :row-key="rowKey"
            :lazy="lazy"
            @row-click="handleRowClick"
            :load="load"
            :tree-props="{ children, hasChildren }"
            :expand-row-keys="expands"
        >
            <el-table-column
                v-for="(item, index) in table"
                :key="index"
                align="center"
                :fixed="item.fixed"
                :prop="item.prop"
                :label="item.label"
                :width="item.width"
                :type="item.type"
                :index="item[rowKey]"
                v-if="item.show"
            >
                <template slot-scope="scope">
                    <soltData
                        v-if="item.scope"
                        @handleClick="handleClick(scope)"
                        @handleClickName="handleClickName"
                        :soltData="item.soltData"
                        :up="up"
                    >
                    </soltData>
                    <el-checkbox
                        v-else-if="
                            item.type === 'selection' || item.type === 'radio'
                        "
                        @change="handleRowClick(scope.row)"
                        :value="checkedData(scope.row[rowKey])"
                    ></el-checkbox>
                    <div v-else-if="item.type === 'expand'">
                        <tableData
                            :tableData="scope.row[childrenKey]"
                            :table="scope.row[tableKey]"
                            @handleClick="handleClick"
                            @handleClickName="handleClickName"
                            :childrenKey="childrenKey"
                            :tableKey="tableKey"
                        ></tableData>
                    </div>
                    <template v-else>
                        {{
                            item.formatter
                                ? item.formatter(
                                      scope.row[item.prop] === 0 ||
                                          scope.row[item.prop]
                                          ? scope.row[item.prop]
                                          : '-'
                                  )
                                : scope.row[item.prop] === 0 ||
                                  scope.row[item.prop]
                                ? scope.row[item.prop]
                                : '-'
                        }}
                    </template>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import soltData from './solt';
export default {
    name: 'tableData',
    data() {
        return {
            multipleSelection: [],
            expands: [],
            selectIndex: '',
            up: []
        };
    },
    props: {
        rowKey: {
            type: String,
            default: 'id'
        },
        hasChildren: {
            type: String,
            default: 'hasChildren'
        },
        children: {
            type: String,
            default: 'children'
        },
        // 折叠子数据对应字段
        childrenKey: {
            type: String,
            default: 'children'
        },
        lazy: {
            type: Boolean,
            default: true
        },
        table: {
            type: Array,
            default: () => {
                return [];
            }
        },
        tableData: {
            type: Array,
            default: () => {
                return [];
            }
        },
        // 多个下拉绑定的table
        tableKey: {
            type: String,
            default: 'table'
        }
    },
    components: {
        soltData
    },
    computed: {
        type: function() {
            return this.table[0] ? this.table[0].type : ''; //默认去数组第一个的type
        }
    },
    created() {
        this.up = Array.from({ length: this.tableData.length }, () => false);
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
                    this.multipleSelection.push(item[this.rowKey]);
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
        handleRadio(row) {
            let rowKey = row[this.rowKey] + '';
            let data = [];
            if (this.selectIndex == rowKey) {
                this.selectIndex = '';
            } else {
                this.selectIndex = row[this.rowKey];
                data.push(row[this.rowKey]);
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
        load(tree, treeNode, resolve) {
            this.$emit('load', resolve);
        },
        checkedData(val) {
            if (this.multipleSelection.indexOf(val) == -1) return false;
            return true;
        },
        selectData() {
            if (this.type == 'radio') {
                return this.tableData[this.selectIndex];
            }
            return this.$refs.multipleTable.selection;
        },
        handleClick(scope) {
            if (this.typeClick == 'expand') {
                this.up[scope.$index] = !this.up[scope.$index];
            }
            scope.name = this.name;
            this.$emit('handleClick', scope);
            this.$refs.multipleTable.toggleRowExpansion(scope.row);
        },
        handleClickName({ name, typeClick }) {
            this.name = name;
            this.typeClick = typeClick;
            this.$emit('handleClickName', { name, typeClick });
        }
    }
};
</script>

