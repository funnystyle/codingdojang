/*
완전수 구하기

자기 자신을 제외한 모든 양의 약수들의 합이 자기 자신이 되는 자연수를 완전수라고 한다. 예를 들면, 6과 28은 완전수이다. 6=1+2+3 // 1,2,3은 각각 6의 약수 28=1+2+4+7+14 // 1,2,4,7,14는 각각 28의 약수

입력으로 자연수 N을 받고, 출력으로 N 이하의 모든 완전수를 출력하는 코드를 작성하라.
*/

// 배열의 총 합을 반환
Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b, 0);
};

// 완전수 판별
Number.prototype.isPerfect = function() {
    return this.valueOf() === this.getDivisors().sum();
};

// [1, n/2]까지의 약수 배열을 반환
Number.prototype.getDivisors = function() {
    // 완전수는 자기 자신을 제외한 약수의 합이므로
    // [1, n] 배열이 아닌 [1, n/2] 배열로 검사해도 된다.
    return getSeries(Math.floor(this / 2)).filter(v => v.canDivide(this));
};

// 약수 판별
Number.prototype.canDivide = function(n) {
    return n % this === 0;
};

// [1, n] 배열을 만들어준다
var getSeries = function(n) {
    return Array.from(Array(n), (_, i) => i + 1);
}

// [1, n] 사이의 완전수들을 배열로 반환
var getPerfectNumbers = function(n) {
    return getSeries(n).filter(v => v.isPerfect());
};


console.log(getPerfectNumbers(6).join(" "));
console.log(getPerfectNumbers(30).join(" "));
console.log(getPerfectNumbers(500).join(" "));
