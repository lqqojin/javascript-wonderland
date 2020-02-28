const _ = require('underscore');

const exMap = _.map([1,2,3], function (v) {
	console.log(v);
	return v * this;
}.bind(5));

console.log(exMap);
