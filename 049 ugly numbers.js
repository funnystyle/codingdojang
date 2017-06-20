/*
Ugly Numbers

출처: http://uva.onlinejudge.org/external/1/136.html

심술쟁이 수는 2,3,5의 곱으로 만들 수 있는 수이다. 다음과 같은 순서의 수가 11개의 심술쟁이 수이다.

1,2,3,4,5,6,8,9,10,12,15,....
처음 수는 1로 시작하도록 한다. 입력은 받지 않고, <number> 에 1500번째 심술쟁이 수가 출력되게 한다.

Sample Output

The 1500'th ugly number is <number>.
답

859963392
(1550번째는 1093500000, 십만번째는 290142196707511001929482240000000000000)
*/

var getUgly = function(index) {
    var n = 1, ugly = [1];

    do {
        var u = ugly.shift();
        ugly = Array.from(new Set([...ugly,2 * u, 3 * u, 5 * u])).sort((a, b) => a - b);
        n++;
    } while (n < index);

    return ugly[0];
}


var getUgly2 = function(index) {
    var n = 1,
        ugly = [1];

    do {
        var u = ugly[0];
        ugly = Array.from(new Set([...ugly.slice(1),2 * u, 3 * u, 5 * u])).sort((a, b) => a - b);
        //console.log(n + " : " + ugly);
        n++;
    } while (n < index);

    return ugly[0];
}

var from = performance.now()
console.log(`The 1500'th ugly number is ${getUgly(1500)}.`);
var to = performance.now()
console.log(`${to - from} ms`);

var from = performance.now()
console.log(`The 1500'th ugly number is ${getUgly2(1500)}.`);
var to = performance.now()
console.log(`${to - from} ms`);
