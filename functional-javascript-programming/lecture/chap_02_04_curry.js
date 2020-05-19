// chap02 함수형으로 전환하기
/*
    03. currying
		_curry
		_curryr
*/
const _curry = function(fn)  {
	return function (a, b) {
		// 인자가 하나일 경우
		/*if(arguments.length === 2) return fn(a, b);
		return (b) => {
			return fn(a, b);
		}*/
		return (arguments.length === 2) ? fn(a, b) : function (b) { return fn(a, b); }
	};
}
const _curryr = function (fn) {
	return function (a, b) {
		return (arguments.length === 2) ? fn(a, b) : function (b) { return fn(b, a); }
	}
}

const add = _curry((a, b) => {
	return a + b;
})
const add10 = add(10);
const add9 = add10(9);
console.log(add9);
console.log(add(8)(7));
console.log(add(6, 5));

const sub = _curryr(function(a, b) {
	return a - b;
})

console.log('sub(10, 9) =', sub(10, 9));
const sub10 = sub(10);
const sub9 =sub10(9);
console.log(sub9);

/*
	_get 만들어 좀 더 간단하게

 */
const users = [
	{ id: 1, name: 'ID', age: 36 },
	{ id: 2, name: 'BJ', age: 32 },
	{ id: 3, name: 'JM', age: 32 },
	{ id: 4, name: 'PJ', age: 27 },
	{ id: 5, name: 'HA', age: 25 },
	{ id: 6, name: 'JE', age: 26 },
	{ id: 7, name: 'JI', age: 31 },
	{ id: 8, name: 'MP', age: 23 }
];
const _get = _curryr(function (obj, key) {
	return obj == null ? undefined : obj[key];
})

console.log(users[0].name);
console.log(_get(users[0], 'name'));

// console.log(users[10].name);
console.log(_get(users[10], 'name'));
console.log(_get('name')(users[1]));
const getName = _get('name');
console.log(getName(users[2]));

// currying 연습 해보기
const random = (fn) => {
	return function (a) {
		let arr = (Math.random() * a).toString().replace(/\./g, '').split('');
		return function (index) {
			return fn(arr, index);
		}
	}
}
// let ranNo = (Math.random()*10000000).toString().substr(3,3)
const multiple= random(function (arr, num) {
	return arr.reduce((acc, cur, index) => {
		if((index+1) % 3 === 0) {
			return acc + cur + '.';
		} else {
			num = num * 2;
			return acc + cur;
		}
	});
})

const addDot= multiple(10000000);
const rst = addDot(3);
console.log(rst);
