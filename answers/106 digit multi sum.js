/*
10~1000까지 각 숫자 분해하여 곱하기의 전체 합 구하기

예로, 10~15까지의 각 숫자 분해하여 곱하기의 전체 합은 다음과 같다.

10 = 1 * 0 = 0
11 = 1 * 1 = 1
12 = 1 * 2 = 2
13 = 1 * 3 = 3
14 = 1 * 4 = 4
15 = 1 * 5 = 5

그러므로, 이 경우의 답은 0+1+2+3+4+5 = 15
*/

var multisum = function (from, to) {
    return Array.from(Array(to), (v, i) => i + 1).slice(from)
                .map(v => ("" + v).split("").reduce((a, b) => a * b))
                .reduce((a, b) => parseInt(a) + parseInt(b));
};

console.log(multisum(10, 15));   //->15
console.log(multisum(10, 1000)); //->93150
