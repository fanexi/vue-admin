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
            redirect: undefined,
            otherQuery: undefined
        };
    },
    watch: {
        $route: {
            handler: function(route) {
                const query = route.query;
                if (query) {
                    this.redirect = query.redirect;
                    this.otherQuery = this.getOtherQuery(query);
                }
            },
            immediate: true
        }
    },
    created() {},
    methods: {
        login() {
            this.$store
                .dispatch('user/getLogin', {
                    username: 'admin',
                    password: 'admin'
                })
                .then(() => {
                    this.$router.push({
                        path: this.redirect,
                        query: this.otherQuery
                    });
                });
        },
        getOtherQuery(query) {
            return Object.keys(query).reduce((acc, cur) => {
                if (cur !== 'redirect') {
                    acc[cur] = query[cur];
                }
                return acc;
            }, {});
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
