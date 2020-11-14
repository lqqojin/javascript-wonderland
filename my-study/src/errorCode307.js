let obj = {
	Error: 'Invalid Response 307'
};
obj = 'Invalid Response 307';
const a = ()=> {
	try {
		// throw new Error('err');
		throw obj;
	} catch (e) {
		console.log(typeof e);
		if (typeof e === 'string') {
			if(/Invalid Response 307/.test(JSON.stringify(obj))){
				console.log('string :::' + e);
			} else {
				console.log('string fail');
			}
		} else if (e instanceof Object) {
			if(/Invalid Response 307/.test(obj)){
				console.log('object :::' + e);
			} else {
				console.log('object fail');
			}
		} else {
			console.log(e);
		}
	}
};
a();
