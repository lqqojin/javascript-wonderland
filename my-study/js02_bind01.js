function sum(a, b,num) {
	console.log(a, b, this);
	return num + this.num1 + this.num2;
}
var myObj = {
	num1: 20, num2: 3
};

var customSum = sum.bind(myObj, 'arg1', 'arg2');
console.log(customSum(5));
console.log ('-------------------');

