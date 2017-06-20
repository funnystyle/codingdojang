/*
Every Other Digit
모든 짝수번째 숫자를 * 로 치환하시오.(홀수번째 숫자,또는 짝수번째 문자를 치환하면 안됩니다.) 로직을 이용하면 쉬운데 정규식으로는 어려울거 같아요.

Example: a1b2cde3~g45hi6 → a*b*cde*~g4*hi6
*/

var input = "a1b2cde3~g45hi6";

// regular expression
var result1 = input => input.replace(/((?:.\D)*)(.)\d((?:.\D)*)/g, "$1$2*$3");

// regular expression with callback
var result2 = input => input.replace(/../g, s => s[0] + s[1].replace(/\d/g, "*"));

// by string index
var result3 = input => input.split("").map((v, i) => i % 2 ? v.replace(/\d/g, "*") : v).join("");

console.log(result1(input));
console.log(result2(input));
console.log(result3(input));
