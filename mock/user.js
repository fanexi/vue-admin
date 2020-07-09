let data = { token: 1234 };

export default [
    // user login
    {
        url: '/user/login',
        type: 'post',
        response: config => {
            let { username, password } = config.body;
            console.log(username);
            console.log(password);
            return {
                status: 200,
                message: 'success',
                data: data
            };
        }
    }
];
