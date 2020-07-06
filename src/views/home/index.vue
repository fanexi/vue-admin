<template>
    <div class="home">
        <el-button>默认按钮</el-button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'Home',
    data() {
        return {
            list: []
        };
    },
    watch: {},
    created() {
        let token = 'b50114fa-23e6-407f-85f1-f9426d95f945';
        axios.post('/api/main/home?token=' + token).then(res => {
            let { data } = res.data,
                list = data.list || [];
            this.list = list;
        });
        console.log(this.list);
    }
};
</script>
<style lang="scss" scoped>
.home {
    color: $color;
}
</style>
