<template>
    <div class="Login">
        <el-button @click="login">登录</el-button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Login',
    data() {
        return {
            list: []
        };
    },
    watch: {},
    created() {},
    methods: {
        login(){
            axios.post('/user/login').then(res=> {
                let {data}=res.data
                console.log(data);
            })
        }
    },
};
</script>
<style lang="scss" scoped>
.Login {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $login-color-default;
}
</style>
