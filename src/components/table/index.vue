<template>
    <div class="tableData">
        <div class="filter-container">
            <el-button-group class="refreshBtn">
                <el-button
                    class="filter-item"
                    type="primary"
                    icon="el-icon-refresh"
                ></el-button>
                <el-popover placement="bottom" trigger="click" class="pop">
                    <label v-for="(item, index) of table" :key="index" >
                        <div  v-if="item.label">
                            <el-checkbox
                            v-model="item.show"
                            >{{ item.label }}</el-checkbox
                        >
                        <br />
                        </div>
                    </label>
                    <el-button
                        slot="reference"
                        type="primary"
                        icon="el-icon-menu"
                        class="setting"
                    ></el-button>
                </el-popover>
            </el-button-group>
        </div>
        <tableSub
            :rowKey="rowKey"
            :hasChildren="hasChildren"
            :children="children"
            :childrenKey="childrenKey"
            :lazy="lazy"
            :table="table"
            :tableData="tableData"
            :tableKey="tableKey"
            @load="load"
            @handleClick="handleClick"
        ></tableSub>
    </div>
</template>
<script>
import tableSub from './tableSub';
export default {
    name: 'tableData',
    data() {
        return {};
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
        tableSub
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {
        handleClick(params){
            this.$emit('handleClick',params)
        },
        load(params){
            this.$emit('load',params)
        }
    }
};
</script>
<style lang="scss" scoped>
.tableData {
    .filter-container {
        margin-bottom: $base-margin;
        float: left;
        width: 100%;
        .refreshBtn {
            float: right;
        }
    }
}
</style>
