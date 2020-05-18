const _ = require('underscore');

const useReduce = _.reduce([1, 2, 3], (memo, val, idx, list) => {
	console.log({ memo, val, idx, list });
	return memo + val;
}, 0);

console.log( useReduce );

const useReduce1 = _.reduce(['a', 'b', 'c'], (memo, val, idx, list) => {
	console.log({ memo, val, idx, list });
	return memo + val;
}, '');

console.log( useReduce1 );

const local = {
	hanReg: '/(공)|(일)|(이)|(삼)|(사)|(오)|(육)|(칠)|(팔)|(구)|(십)|(영)|(하나)|(둘)|(셋)|(넷)|(다섯)|(여섯)|(일곱)|(여덟)|(아홉)|(열)/g'
};

const input = '구공공육이공';


const value = input.match(eval(local.hanReg)).reduce((memo, cur, index) => {
	return memo + cur.replace(/영|공/, '0').replace(/일|하나/, '1')
	.replace(/이|둘/, '2').replace(/삼|셋/, '3')
	.replace(/사|넷/, '4').replace(/오|다섯/, '5')
	.replace(/육|여섯/, '6').replace(/칠|일곱/, '7')
	.replace(/팔|여덟/, '8').replace(/구|아홉/, '9')
	.replace(/열|십/, '10')
},'').slice(0, 8);
console.log(value);
