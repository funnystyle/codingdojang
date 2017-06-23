/*
가장 큰 수 만들기
출처 : http://www.programcreek.com/2014/02/leetcode-largest-number-java/

음수가 아닌 수들이 주어졌을 때 그 수들을 이어서 만들 수 있는 가장 큰 수를 구하시오.
예를 들어 [1,2,3]이 주어졌을 때 만들 수 있는 가장 큰 수는 321이고,
[3, 30, 34, 5, 9] 가 주어지면 만들 수 있는 가장 큰 수는 9534330이다.
*/

console.log([3, 30, 34, 5, 9].sort((a, b) => ("" + a + b) - ("" + b + a)).reverse().join(""));
console.log([1,2,3].sort((a, b) => ("" + a + b) - ("" + b + a)).reverse().join(""));




Array.prototype.arrange = function () {
    return this.sort((a, b) => `${a}${b}` - `${b}${a}`).reverse().join("");
};

console.log([3, 30, 34, 5, 9].arrange());
console.log([1,2,3].arrange());
