/**
 * 순수 함수
 *  특징
 *  첫번째: 항상 동일한 인자를 주면 동일한 결과를 리턴 한다.
 *  두번째: 부수 효과가 없다.(부수 효과: 외부의 상태가 결과에 미치는 현상)
 *  세번째: 평가 시점이 중요 하지 않다.(중요한 개념)
 *      add2는 c가 변경 되기 전 후에 따라 결과 값이 달라 진다.
 *      그러나 순수 함수는 평가 시점에 따라 겱과가 달라지지 않는다. ()
 */
/* 순수 함수 */
function add(a, b) {
	return a + b;
}

console.log( add(10, 5) );
console.log( add(10, 5) );
console.log( add(10, 5) );
console.log( add(10, 5) );
console.log( add(10, 5) );
console.log( add(10, 5) );

/**
 * 동일한 인자를 주었을 때 상황에 따라 다른 결과를 리턴 하는 함수
 * c 변수가 상수 라면 add2 순수 함수가 된다.
 */
var c = 10;
function add2(a, b) {
	return a + b + c;
}
console.log( add2(10, 2) ); // 22
console.log( add2(10, 3) );
console.log( add2(10, 4) );
c = 20; // 10 => 20 으로 변경
// 결과가 달라진다. 순수함수 X
console.log( add2(10, 2) ); // 32
console.log( add2(10, 3) );
console.log( add2(10, 4) );


/**
 * 부수 효과 발생 함으로 순수 함수가 아니다.
 */
var c = 20;
function add3(a, b) {
	c = b; // 외부의 상태에 직접 관여함
	return a + b;
}
// 2개의 c는 다른 값이 된다.
console.log('c: ', c);
console.log( add3(20, 30) );
console.log('c: ', c);
//console.log( add3(20, 30) );
//console.log( add3(20, 30) );

/**
 * 인자의 상태를 직접 변경 순수 함수가 아니다.
 * @type {{val: number}}
 */
var obj1 = { val: 10 };
function add4(obj, b) {
	obj.val += b;
}
console.log( obj1.val );
add4(obj1, 20);
console.log( obj1.val );


/**
 * 다시 순수 함수
 * 값을 건들지 인자로 받은 값을 변경
 * 모든 값 변화 X
 * 외부의 상태 변화X
 * 인자를 받은 값 변화 X
 */
var obj1 = { val: 10 };
function add5(obj, b) {
	return { val: obj.val + b };
}

console.log( obj1.val );
var obj2 = add5(obj1, 20);
console.log( obj1.val );
console.log( obj2.val );

/**
 * 일급 함수
 *  조건
 *      함수를 인자를 들고 다니고 평가 할 수있다.
 *
 */
console.log('일급 함수')

