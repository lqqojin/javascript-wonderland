/**
 * forEach vs _.each
 */
const _ = require('underscore');

const arr = [1,2,3];
const obj = {a: 'A', b: 'B'};
const jsForEach = arr.forEach((value, index, list) => {
	console.log(value,index,list);
});
console.log(1, 'Array.prototype | forEach | Array >>> ', jsForEach);

const underscoreEach = _.each(arr, (value, index, list) => {
	console.log(value, index, list);
});
console.log(2, 'underscore | Each | Array >>> ', underscoreEach);

// const jsForEach2 = obj.forEach((value, index, list) => {
// 	console.log(value,index,list);
// });
console.log(3, 'Array.prototype | forEach | Object >>> ', 'TypeError: obj.forEach is not a function');

const underscoreEach2 = _.each(obj,(value, index, list) => {
	console.log(value,index,list);
});
console.log(4, 'underscore | Each | Object >>> ', underscoreEach2);

console.log('<첫번째 차이점>' +
	'\n\t1. underscore.js >>> each는 자신이 받았던 첫 번째 인자를 그대로 리턴한다.' +
	`\n\t2. Array.prototype.forEach  >>> return = ${undefined}`);

console.log('<두번째 차이점>' +
	'\n\t사용 가능한 값의 종류가 _.each 가 더 많다. ' +
	'\n\t1. Object {key: value} 쌍으로 구성 된 객체' +
	'\n\t2. jQuery $(\'li\')' +
	'\n\t3. ArrayLike(배열 같은 객체} ');
