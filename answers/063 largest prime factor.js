/*
Largest prime factor

출처 : http://projecteuler.net/problem=3, 한국어 사이트

프로젝트 오일러 3번째 문제

어떤 수를 소수의 곱으로만 나타내는 것을 소인수분해라 하고, 이 소수들을 그 수의 소인수라고 한다.

예를 들면 13195의 소인수는 5, 7, 13, 29 이다.

600851475143의 소인수 중에서 가장 큰 수를 구하시오.
*/

/*
아이디어

2를 제외한 모든 소수는 홀수
x로 나눌 때는 n/x 까지만 검사하면 된다
라는 점에 착안하여 다음 코드를 작성하였습니다.
*/

var div = function(n, i) {
    while (n % i === 0) {
        n /= i;
    }
    return n;
};

var getLargestPrimeFactor = function(n) {
    n = div(n, 2);

    for (var i = 3; i <= n / i | 0; i = i + 2) {
        n = div(n, i);
    }

    return n;
};


console.log(getLargestPrimeFactor(600851475143));

>>> 6857

//---

var getLargestPrimeFactor = function(num) {
    var n = num, 
        i = 0;
    while(n > 1) {
        for (i = 2; i < Math.ceil(2 / n); i++) {
            if (n % i === 0) {
                n /= i;
                break;
            }
        }
        if (n === 1) return n * (i - 1);
    }
    // 여기까지 오면 n 은 소수이다.
    return num;
}

console.log(getLargestPrimeFactor(600851475143));


2 ~ 2/n 까지 검사하다가 약수를 만나면 나눈다


var from = performance.now();
var n = 600851475143;
for (var i = 2; i < n; i++) {
    if (n % i == 0) {
        n = n / i;
    }
}
console.log(n);

console.log(`${performance.now() - from} milliseconds`);



var n = 600851475143;

var from = performance.now();

var div = function(n, i) {
    while (n % i === 0) {
        n /= i;
    }
    return n;
};

var getLargestPrimeFactor = function(n) {
    n = div(n, 2);

    for (var i = 3; i <= n / i | 0; i = i + 2) {
        n = div(n, i);
    }

    return n;
};


console.log(getLargestPrimeFactor(600851475143));

console.log(`${performance.now() - from} milliseconds`);


var from = performance.now();

var n = 600851475143;

while (n % 2 === 0) {
    n /= 2;
}

for (var i = 3; i <= n / i | 0; i = i + 2) {
    while (n % i === 0) {
        n /= i;
    }
}

console.log(n);


console.log(`${performance.now() - from} milliseconds`);

var from = performance.now();

var n = 600851475143;

while (n % 2 === 0) {
    n /= 2;
}

for (var i = 3; i <= n / 3 | 0; i = i + 2) {
    while (n % i === 0) {
        n /= i;
    }
}

console.log(n);


console.log(`${performance.now() - from} milliseconds`);

var from = performance.now();

var n = 600851475143;

while (n % 2 === 0) {
    n /= 2;
}

for (var i = 3; i <= n / i | 0; i = i + 2) {
    n = div(n, i);
    while (n % i === 0) {
        n /= i;
    }
}

console.log(n);


console.log(`${performance.now() - from} milliseconds`);
