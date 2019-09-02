function addMaker(a) {
	return function(b) {
		return a+b;
	}
}
console.log(addMaker(3));
console.log(addMaker(10)(5));

const add7 = addMaker(7);
console.log(add7(4));
console.log(add7(11));

var v1 = 100;
var v2 = function() {};
function f1 () { return 100; }
function f2 () { return function() {} }