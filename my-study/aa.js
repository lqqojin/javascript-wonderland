require()

let global = {
	date: 'new Date().getDay()'
};
const a = 1;
let result =  new Function('a', 'global', `return ${ global.date }`)(console.log(global),a, console.log(a));
global.date = result;
// console.log(result);
// console.log(global);