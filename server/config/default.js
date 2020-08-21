'use strict';

module.exports = {
    port: parseInt(process.env.PORT, 10) || '0798',
    url: 'mongodb://localhost:27017/myDB',
    session: {
        name: 'SID',
        secret: 'SID',
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 365 * 24 * 60 * 60 * 1000,
        }
    }
}