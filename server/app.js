let express = require('express')
const db = require('./mongo')
const config = require('config-lite')
const chalk = require('chalk')

let bodyParser = require('body-parser')
let router = require('./routers')
let app = express()
app.all('*', (req, res, next) => {
    const {
        origin,
        Origin,
        referer,
        Referer
    } = req.headers;
    const allowOrigin = origin || Origin || referer || Referer || '*';
    res.header("Access-Control-Allow-Origin", allowOrigin);
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", true); //可以带cookies
    res.header("X-Powered-By", 'Express');
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())
router(app)
app.listen(config.port, function () {
    console.log(
        chalk.green(`成功监听端口：${config.port}`)
    )
})