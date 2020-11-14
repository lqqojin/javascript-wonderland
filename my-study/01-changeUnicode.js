let data = '╗1|2╚';
// let data = '가힝한글'

const koChangeCharCode = (str) => {
    let strLen = str.length;
    let hexadecimal = '';
    for(let i = 0; i < strLen; i += 1) {
        let decimalNum = str.charCodeAt(i);
        console.log(decimalNum)
        hexadecimal += '\\u' + decimalNum.toString(16);
    }
    return hexadecimal;
}

const encRst = koChangeCharCode(data);
console.log(encRst);
changeChar = (charCode) => {
    let arr = [charCode];
    if(charCode.indexOf('\\u') > 0) {
        arr = charCode.split('\\u').splice(1);
    }
    console.log(arr);
    let tmpStr = '';
    arr.forEach(item => {
        const decimalNum = parseInt(item, 16);
        tmpStr += String.fromCharCode(decimalNum);
    });
    console.log(data === tmpStr)
    return tmpStr;
}
console.log(changeChar(encRst));
console.log(`\\u0002: [${String.fromCharCode(parseInt('2557', 16))}]`);
console.log(`\\u0003: [${String.fromCharCode(parseInt('0003'))}]`)

// for(let i = 0; i < 100; i += 1) {
//     let hexaDecimal = i.toString(16);
//     console.log(changeChar(`00${hexaDecimal}`));
// }


