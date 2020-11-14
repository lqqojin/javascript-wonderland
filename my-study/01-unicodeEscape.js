let data = '한';

const encoding = (src) => {
    return '\\u'+ (src.charCodeAt(0).toString(16))// .slice(-4));
}

const encRst = encoding(data);
console.log(encRst);
console.log('한'.charCodeAt(0).toString(16))
console.log(`abc + ${String.fromCharCode(2)}`);
console.log(parseInt('\u0002'))



