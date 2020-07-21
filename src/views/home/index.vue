<template>
    <el-table :expand-row-keys="expands" :data="tableData" style="width: 100%">
        <el-table-column prop="key" type="expand" width="1" fixed>
            <template slot-scope="props">
                <el-table :data="props.row.tableData">
                    <el-table-column prop="id"> </el-table-column>
                </el-table>
            </template>
        </el-table-column>
        <el-table-column label="商品 ID" prop="id"> </el-table-column>
        <el-table-column label="商品名称" prop="name"> </el-table-column>
    </el-table>
</template>
<script>
export default {
    data() {
        return {
            tableData: [
                {
                    id: 1,
                    name: 1,
                    key: 'id',
                    tableData: [
                        {
                            id: 1,
                            name: 1,
                            key: 'id'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 2,
                    key: 'ids',
                    tableData: [
                        {
                            id: 2,
                            name: 1,
                            key: 'id'
                        }
                    ]
                }
            ],
            expands: []
        };
    }
};
</script>
