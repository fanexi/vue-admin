<template>
    <div>
        <el-input v-model="formObj[itemKey]"></el-input>
    </div>
</template>
<script>
export default {
    name: 'InputData',
    props: {
        itemKey: {
            type: String
        },
        formObj: {
            type: Object
        }
    }
};
</script>
