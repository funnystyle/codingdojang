/*
Smallest multiple

출처 : 프로젝트 오일러 5번문제, 한글 번역판

1 ~ 10 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 2520입니다.

그러면 1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 얼마입니까?
*/

var gcd = function g(x, y) {
    return y ? g(y, x % y) : x;
}

var lcd = function(x, y) {
    return x * y / gcd(x, y);
}

var arr = Array.from({length: 20}, (v, k) => k + 1); // make 1 to 20 array with array-like object and mapFn

var res = arr.reduce(lcd);

console.log(res);
