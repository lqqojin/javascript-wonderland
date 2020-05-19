/*
    reduce 만들기
*/

const add = function (a, b) {
    return a + b;
}
const _each = function (list, iter) {
    for(let i = 0, len = list.length; i < len; i += 1) {
        iter(list[i])
    }
    return list;
}
const slice = Array.prototype.slice;
function _rest(list, num) {
    return slice.call(list, num || 1);
}
const _reduce = function (list, iter, memo) {
    // return iter(iter(iter(0, 1), 2), 3);
    if (arguments.length === 2) {
        memo = list[0];
        // list = list.slice(1); // 새로운 배열을 리턴 하는 slice
        list = _rest(list);
    }
    _each(list, function(val) {
        memo = iter(memo, val);
    })
    return memo;
};

console.log(
    _reduce([1, 2, 3], add, 0)
);

console.log(
    _reduce([1, 2, 3], add, 10)
)

console.log(
    _reduce([1, 2, 3], add)
)

console.log(
    _reduce([1, 2, 3, 4], add, 10)
)
