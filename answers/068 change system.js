/*
10진수를 n진수로 변환하기

다음은 233 이란 10진수를 2진수로 변환하는 과정을 나타낸 그림이다.



위 그림을 참조하여 라이브러리를 사용하지 말고 10진수를 n진수로 변환하는 프로그램을 작성하시오.. (단, n의 범위는 2 <= n <= 16)

예)

2진수로 변환 : 23310 --> 111010012
8진수로 변환 : 23310 --> 3518
16진수로 변환 : 23310 --> E916
stack
*/

Number.DIGIT = "0123456789ABCDEF";

// 재귀로
Number.prototype.systemTo = function(base) {
    return this > base ? parseInt(this / base).systemTo(base) + "" + Number.DIGIT[this % base] :
                         Number.DIGIT[this];
};  

console.log((233).systemTo(2));
console.log((233).systemTo(8));
console.log((233).systemTo(16));

// 반복문으로
Number.prototype.systemTo = function(base) {
    var q = this,
        n = "";

    do {
        [q, r] = [parseInt(q / base), q % base];
        n = Number.DIGIT[r] + n;
    } while(q > 0);
    return n;
};

console.log((233).systemTo(2));
console.log((233).systemTo(8));
console.log((233).systemTo(16));
