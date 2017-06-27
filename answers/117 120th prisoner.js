/*
120번째 죄수

감옥에 120명의 죄수가 있다. 간수는 복도를 120번 동안 다음 조건에 지나간다.

처음에 문은 모두 닫혀 있다.
N번째 지나갈 때에는 N의 배수인 문들이 열려 있으면 닫고, 닫혀 있으면 연다.
마지막에 문이 열려 있으면 그 방의 죄수는 석방이다.
과연 몇 명의 죄수가 석방될까?
*/

var prisoner = 120;
var canfree = n => Number.isInteger(Math.sqrt(n)); // 제곱수 판별
var released = Array.from(Array(prisoner), (_, i) => i + 1).filter(canfree);

console.log(`released Number : ${released.join(" ")}`);
console.log(`released count  : ${released.length}`);
