// function sum(num) {
// 	console.log(this);
// 	return num + this.num1 + this.num2;
// }
//
// var myObj = {num1:20, num2: 3};
//
// var customSum = sum.bind(myObj);
//
// console.log(customSum(5));

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	info(){
		// console.log(`x: ${this.x}, y: ${this.y}`);
		return this.x + this.y;

	}

	exec() {
		return this.info.bind(this)();
	}
}

var point = new Point(30, 40);

// point.info();

console.log(point.info.bind({x: 100, y: 200})());
console.log(point.exec());