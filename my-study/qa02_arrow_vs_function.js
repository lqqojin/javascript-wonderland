// function(){}방식으로 호출할 때
function objFunction() {
	console.log('Inside `objFunction`:', this.foo);
	return {
		foo: 25,
		bar: function() {
			console.log('Inside `bar`:', this.foo);
		},
	};
}

objFunction.call({foo: 13}).bar(); // objFunction의 `this`를 오버라이딩합니다.

// Arrow Function방식으로 호출할 때
function objFunction1() {
	console.log('Inside `objFunction`:', this.foo);
	return {
		foo: 25,
		bar: () => console.log('Inside `bar`:', this.foo),
	};
}

objFunction1.call({foo: 30}).bar(); // objFunction의 `this`를 오버라이딩합니다.

function getData(data) {
	return data(123);
}
// ES5 function에서는 `this` Scope가 function안에 들어가면 변하기 때문에 새로운 변수를 만들어 씁니다.
const someVar = this;
getData(function(data) {
	someVar.data = data;
	console.log(1,this);
	return someVar;
});

// ES6 Arrow Function에서는 `this` Scope의 변화가 없기 때문에 `this`를 그대로 사용하면 됩니다.
getData(data => {
	this.data = data;
	console.log(2,this);
	return this;
});