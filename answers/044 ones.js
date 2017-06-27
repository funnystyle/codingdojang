/*
Ones

출처: programming challenges

2나 5로 나눌 수 없는 0 이상 10,000 이하의 정수 n이 주어졌는데, n의 배수 중에는 10진수로 표기했을 때 모든 자리 숫자가 1인 것이 있다. 그러한 n의 배수 중에서 가장 작은 것은 몇 자리 수일까?

Sample Input

3
7
9901
Sample Output

3
6
12
*/

var ones = function(n) {
    for (var i = 1; i % n > 0; i += "1") /* do nothing */ ;
    return i.length;
};


console.log(ones(3));
console.log(ones(7));
console.log(ones(9901));
