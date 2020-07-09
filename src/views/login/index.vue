<template>
    <div class="Login">
        <el-button @click="login">登录</el-button>
    </div>
</template>
<script>
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
        async login() {
            let res =await this.$store.dispatch('user/getLogin', {
                username: 'admin',
                password: 'admin'
            });
            console.log(res);
        }
    }
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
