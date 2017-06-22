/*
초완전수

자연수 n이 있다.
f(n)=(n의 양의 약수의 합)이라고고 하자.
자연수 n이 어떤 k에 대하여 등식 n = 1 + k(f(n)-n-1)을 만족했을 때, n을 k-초완전수라고 부른다.
n이 완전수라는 것은 n이 1-초완전수라는 것이라는 명제와 동치이다.
예를 들어, 21은 2-초완전수이고 301은 6-초완전수이다.
자연수 N을 입력받고 N 이하의 k-초완전수와 그때의 k를 순서쌍으로 출력하는 프로그램을 작성하라.

<예시> 1. 입력 1000 2. 출력 (6,1) (21,2) (28,1) (301,6) (325,3) (496,1) (697,12)
*/

// 

var aliquotSum = n => Array.from(Array(n), (v, i) => i + 1)
                           .reduce((a, b) => a + (n % b === 0 ? b : 0), 0);

var hyperperfect = n => {
    var factor = aliquotSum(n) - n - 1;
    var k = 0;
    if (factor !== 0 && Number.isInteger(k = (n - 1) / factor)) {
        return [n, k];
    }
};

var findhp = n => Array.from(Array(n - 1), (v, i) => i + 2)
                       .map(hyperperfect)
                       .forEach(v => v && console.log(`(${v[0]}, ${v[1]})`));

findhp(1000);


var findhp = function (n) {
    for (var i = 3; i <= n; i++) {
        hyperperfect(i);
    }
}

findhp(1000);


var aliquotSum = n => Array.from(Array(Math.floor(n / 2)), (v, i) => i + 2)
                           .reduce((a, b) => a + (n % b === 0 ? b : 0), 1) + n;
