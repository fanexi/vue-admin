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
            console.log(config);
            return {
                status: 200,
                message: 'success',
                data: admin
            };
        }
    }
];
