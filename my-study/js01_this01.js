/**
 * javascript this
 * 자바스크립트의 this 와 다른 언어의 this 는 다르다.
 *
 *
 * */

console.log('1. 전역: 전역에서 this 사용하면 상황에 따라 다르다.');
// 1. 브라우저 this
// this.constructor.name > Window
// this > window 객체 반환
/**
 *
 <!DOCTYPE html>
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    console.log(this.constructor.name);
    console.log(this);
</script>
</body>
</html>
 */
// 2. nodejs this
console.log('   ㄴ. nodejs 전역에서 this 사용');
console.log('       nodejs this.constructor.name >>', this.constructor.name);
console.log('       nodejs this', this);
console.log('--------------------------------------------------------------');
console.log('2. 함수: 함수에서 this 사용');
/**
 * <!DOCTYPE html>
<html lang="kr">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<script>
    function f() {
        console.log(this.constructor.name);
        console.log(this);
    }

    f();
</script>
</body>
</html>
*/
console.log('   ㄱ. 브라우저는 함수에서 this 는 전역 this 와 동등하다.');
console.log('   ㄴ. nodejs 함수에서 this 사용');
function f() {
	console.log('       a. nodejs this.constructor.name >>', this.constructor.name);
	console.log('       b. nodejs this >>', this);
}
f();
console.log('   ㄷ. \'use strict\' 함수에서 this 사용');
function f1() {
	'use strict';
	console.log('       a. nodejs use strict 모드 함수에서 this >>', this);
}
f1();
console.log('--------------------------------------------------------------');
console.log('3. method: 메소드에서 this 사용');
console.log('   ㄱ. 브라우저는 메소드에서 \'this\'는 자기자신의 객체를 반환');
/*<!DOCTYPE html>
<html lang="kr">
<head>
	<meta charset="UTF-8">
		<title>Title</title>
</head>
<body>
<script>
	var myObj = {
	num1: 10,
	num2: 5,
	sum: function () {
	console.log(this === myObj);
	console.log(this.num1 + this.num2);
}
};
	myObj.sum();
</script>
</body>
</html>*/
console.log('   ㄴ. nodejs \'this\'는 자기자신의 객체를 반환\'');
var myObj = {
	num1: 10,
	num2: 5,
	sum: function () {
		console.log(this === myObj);
		console.log(this.num1 + this.num2);
	}
};
myObj.sum();


function Point (x, y) {
	this.x = x;
	this.y = y;
	console.log(this);
	console.log(this.constructor.name);

}

var point = new Point(10, 5);
