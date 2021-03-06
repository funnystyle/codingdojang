/*
1~1000에서 각 숫자의 개수 구하기

예로 10 ~ 15 까지의 각 숫자의 개수를 구해보자

10 = 1, 0
11 = 1, 1
12 = 1, 2
13 = 1, 3
14 = 1, 4
15 = 1, 5

그러므로 이 경우의 답은 0:1개, 1:7개, 2:1개, 3:1개, 4:1개, 5:1개
*/



var ans = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var counts = Array.from(Array(10), () => 0);

var counts = [];
var increase = $ => counts[$] = (counts[$] || 0) + 1;
for (let i = 1; i <= 1000; i++) {
    Array.from(`${i}`).map(increase);
}

console.log(counts.map((v, i) => `${i}:${v}개`).join(", "));

var counts = [];
var digits = Array.from(Array(1000), (_, i) => `${i + 1}`.split(""))
                  .reduce((a, b) => a.concat(b), [])
                  .forEach(v => counts[v] = (counts[v] || 0) + 1);

console.log(counts.map((v, i) => i + ":" + v + "개").join(", "));
