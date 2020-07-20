export function deepClone(source) {
    if (!source && typeof source !== 'object') {
        throw new Error('error arguments', 'deepClone');
    }
    const targetObj = source.constructor === Array ? [] : {};
    Object.keys(source).forEach(keys => {
        if (source[keys] && typeof source[keys] === 'object') {
            targetObj[keys] = deepClone(source[keys]);
        } else {
            targetObj[keys] = source[keys];
        }
    });
    return targetObj;
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
    const search = url.split('?')[1];
    if (!search) {
        return {};
    }
    return JSON.parse(
        '{"' +
            decodeURIComponent(search)
                .replace(/"/g, '\\"')
                .replace(/&/g, '","')
                .replace(/=/g, '":"')
                .replace(/\+/g, ' ') +
            '"}'
    );
}

// 多维数组变一维数组
/**
 * @param {Array}
 * @returns {String}
 */
export function flatten(arr, name) {
    return [].concat(
        ...arr.map(item => {
            if (item[name] && item[name].length != 0) {
                return [].concat(item, ...flatten(item[name], name));
            } else {
                return [].concat(item);
            }
        })
    );
}
/**
 * 加法函数，用来得到精确的加法结果
 * @param {Object} arg1
 * @param {Object} arg2
 */
export function accAdd(arg1, arg2) {
    var r1 = deal(arg1);
    var r2 = deal(arg2);
    var m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
}

/**
 * 乘法函数，用来得到精确的乘法结果
 * @param {Object} arg1
 * @param {Object} arg2
 */
export function accMul(arg1, arg2) {
    var m = 0;
    m += deal(arg1);
    m += deal(arg2);
    var r1 = Number(arg1.toString().replace('.', ''));
    var r2 = Number(arg2.toString().replace('.', ''));
    return (r1 * r2) / Math.pow(10, m);
}

/**
 * 除法函数，用来得到精确的除法结果
 * @param {Object} arg1
 * @param {Object} arg2
 */
export function accDiv(arg1, arg2) {
    var t1 = deal(arg1);
    var t2 = deal(arg2);
    var r1 = Number(arg1.toString().replace('.', ''));
    var r2 = Number(arg2.toString().replace('.', ''));
    return (r1 / r2) * Math.pow(10, t2 - t1);
}
/**
 * 求小数点后的数据长度
 */
export function deal(arg) {
    var t = 0;
    try {
        t = arg.toString().split('.')[1].length;
    } catch (e) {
        console.log(e);
    }
    return t;
}
/**
 * table过滤字段
 * 参数 this 当前行 对应字段 自定义数据
 */
export function formatterKey(that, row, data) {
    let val = data.filter(item => item.value == row);
    if (val.length > 0) {
        return val[0].label;
    } else {
        return '-';
    }
}
