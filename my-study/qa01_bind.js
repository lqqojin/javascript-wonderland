// 설명 필요

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
