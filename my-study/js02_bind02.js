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

class Point {
	constructor(x, y) {
this.x = x;
this.y = y;
}

info(v, w) {
	console.log({x: this.x, y: this.y, v, w});
}
}

var point = new Point(10, 20);
point.info(1, 2);
point.info.bind({x: 100, y: 200})('v', 'w');

var customPoint = {x: 1000, y: 2000};

point.info.call(customPoint, 20, 30);
point.info.apply(this, [2, 3]);
