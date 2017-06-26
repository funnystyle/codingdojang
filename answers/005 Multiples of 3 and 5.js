/*
Multiples of 3 and 5

오랜만에 퀴즈하나 투척합니다.

프로젝트 오일러라고 들어보셨나요?
프로그래밍 퀴즈를 풀이하는 유명한 곳인데요..
그곳에 있는 첫번째 문제를 이곳 코딩도장에 한번 소개해 볼까 합니다.

http://projecteuler.net/problem=1

[문제]

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

[번역]

10미만의 자연수에서 3과 5의 배수를 구하면 3,5,6,9이다. 이들의 총합은 23이다.
1000미만의 자연수에서 3,5의 배수의 총합을 구하라.
정답은 위 사이트에서 직접 확인 가능합니다.
*/

// 1
var array = Array.from({length: 1000}, (v, k) => k + 1);
var filter = n => n % 3 === 0 || n % 5 === 0;
var add = (a, b) => a + b;
var sum = array.filter(filter).reduce(add);
console.log(sum);

// 1-1. 1 을 줄인 것

console.log(Array.from(Array(1000),(_,i)=>i+1).filter(n=>!(n%3&&n%5)).reduce((a,b)=>a+b));

// 2
var threeSet = Array.from({length: 333}, (v, k) => (k + 1) * 3);
var fiveSet = Array.from({length: 200}, (v, k) => (k + 1) * 5);
var sumSet = Array.from(new Set(threeSet.concat(fiveSet)));
var sum = sumSet.reduce((a, b) => a + b);
console.log(sum);
