let admin = [
    {
        id: 1,
        name: 'zs',
        age: '23',
        job: '前端工程师'
    },
    {
        id: 2,
        name: 'ww',
        age: '24',
        job: '后端工程师'
    }
];

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
                data: admin
            };
        }
    }
];
