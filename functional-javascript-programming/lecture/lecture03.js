const users = [
    { id: 1, name: 'ID', age: 36 },
    { id: 2, name: 'BJ', age: 32 },
    { id: 3, name: 'JM', age: 32 },
    { id: 4, name: 'PJ', age: 27 },
    { id: 5, name: 'HA', age: 25 },
    { id: 6, name: 'JE', age: 26 },
    { id: 7, name: 'JI', age: 31 },
    { id: 8, name: 'MP', age: 23 }
];

// 1. 명령형 코드
let tmp_users = [];
// 1. 30세 이상인 users를 거른다.
for (let i = 0, len = users.length; i < len; i += 1) {
    if (users[i].age >= 30) {
        tmp_users.push(users[i]);
    }
}
console.log('30세 이상인 users >', tmp_users);
console.log('-----------------------------------');
// 2. 30세 이상인 users의 names를 수집한다.
let tmp_names = []
for (let i = 0, len = tmp_users.length; i < len; i += 1) {
    tmp_names.push(tmp_users[i].name);
}
console.log('30세 이상인 users의 names >', tmp_names);
console.log('-----------------------------------');
// 3. 30세 미만인 users를 거른다.
tmp_users = [];
for (let i = 0, len = users.length; i < len; i += 1) {
    if (users[i].age < 30) {
        tmp_users.push(users[i]);
    }
}
console.log('30세 미만인 users >', tmp_users);
console.log('-----------------------------------');
// 4. 30세 미만인 users의 ages를 수집한다.
tmp_ages = []
for (let i = 0, len = tmp_users.length; i < len; i += 1) {
    tmp_ages.push(tmp_users[i].age);
}
console.log('30세 미만인 users의 names >', tmp_ages);
console.log('-----------------------------------');

// 2. _filter, _map으로 리팩토링
function _filter(list, predicate) {
    let new_list = [];
    _each(list, function (val) {
        if (predicate(val)) {
            new_list.push(val)
        }
    });
    //for (let i = 0, len = list.length; i < len; i += 1) {
    //     if (predicate(list[i])) {
    //         new_list.push(list[i]);
    //     }
    //}
    return new_list
}
// _filter 는 응용형 함수: 함수를 인자를 받아 원하는 시점에 평가

console.log(
    '_filter 사용 30세 이상 user >',
    _filter(users, function(user){
        if(user.age >= 30) return true;
    })
)

console.log(
    '_filter 사용 30세 미 user >',
    _filter(users, function(user){
        if(user.age < 30) return true;
    })
);
// _filter 는 다용성과 재활용성이 높은 함수가 되었다.
console.log(
    '_filter [1,2,3,4,5] 배열 홀수 >',
    _filter([1, 2, 3, 4, 5], function(num) {
        return num % 2;
    })
);
console.log('-----------------------------------');

console.log(
    '_filter [1,2,3,4,5] 배열 짝수 >',
    _filter([1, 2, 3, 4, 5], function(num) {
        return !(num % 2);
    })
)
console.log('-----------------------------------');

// 나이와 이름의 중복을 제거한 코드 만들기
function _map(list, mapper) {
    let new_lists = [];
    _each(list, function (val) {
        new_lists.push(mapper(val));
    })
    // for (let i = 0, len = list.length; i < len; i += 1) {
    //     new_lists.push(mapper(list[i]));
    // }
    return new_lists;
}
console.log(
    '_map 사용 30세 이상 이름',
    _map(
        _filter(users, function(user) {
            return user.age >= 30
        }),
        function (user) {
            return user.name
        }
    )
);

console.log(
    '_map 사용 30세 미만 나이',
    _map(
        _filter(users, user => user.age < 30),
        user => user.age
    )
);

// 루프 중복 제거
function _each(list, iter) {
    for (let i = 0, len = list.length; i < len; i += 1) {
        iter(list[i])
    }
    return list;
}
