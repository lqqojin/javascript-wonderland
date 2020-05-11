const users = [
	{ id: 1, name: "ID", age: 32 },
	{ id: 2, name: "HA", age: 25 },
	{ id: 3, name: "BJ", age: 32 },
	{ id: 4, name: "PJ", age: 28 },
	{ id: 5, name: "JE", age: 27 },
	{ id: 6, name: "JM", age: 32 },
	{ id: 7, name: "HI", age: 24 }
];

const filter = (list, predicate) => {
	let new_list = [];
	for (let i = 0, len = list.length; i < len; i += 1) {
		if (predicate(list[i])) new_list.push(list[i]);
	}
	return new_list;
};

const users_under_30 = filter(users, (user) => { return user.age < 30 });
console.log(users_under_30.length);

const ages = [];
for (let i = 0, len = users_under_30.length; i < len; i += 1) {
	ages.push(users_under_30[i].age);
}
console.log(ages);

const users_over_30 = filter(users, (user) => user.age >= 30 );
console.log(users_over_30.length);

const names = [];
for (let i = 0, len = users_over_30.length; i < len; i += 1) {
	names.push(users_over_30[i].name);
}

console.log(names);

let i = 0;
const forEachTest = users.forEach(v => {
	i++;
	v.a = i;
	return v;
});
console.log(users, forEachTest);

let j = 0;
const mapTest = users.map(v => {
	j++;
	v.b = j;
	return v;
});
console.log(mapTest);


