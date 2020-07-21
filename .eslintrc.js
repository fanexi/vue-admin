module.exports = {
    root: true,
    env: {
        node: true
    },
    // extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
    extends: ['plugin:vue/essential'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/no-use-v-if-with-v-for': [
            'error',
            {
                allowUsingIterationVar: true
            }
        ]
    }
};
