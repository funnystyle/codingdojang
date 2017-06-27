/*
상품 is 뭔들 (2016 인하대 프로그래밍 경진대회 B번)
계단 오르기

계단을 오르는 방법에는 여러가지가 있습니다.
한 계단씩만 올라가는 방법이 있고,
두 계단만 올라가는 방법이 있고
혹은 세 계단만 올라가는 방법이 있습니다.

계단의 수를 n이라 하고
한번에 올라갈 수 있는 maximum 계단의 수를 j라고 했을 때
계단을 올라갈 수 있는 경우의 수를 구하시오.
*/

var climbing = function (n, j) {
    cache = [0, 1];
    for (let i = 2; i <= j; i++) {
        cache[i] = cache.reduce((a, b) => a + b, 0) + 1;
    }

    return (function climb(n, j) {
		if (typeof cache[n] === "undefined") {
            cache[n] = Array.from(Array(j), (v, i) => n - i - 1)
                            .filter(v => v > 0)
                            .map(v => climb(v, j))
                            .reduce((a, b) => a + b, 0);
		}
		return cache[n];
	})(n, j);
};

var steps = climbing(5, 3);
console.log(steps);

//-------

var climbing = function (n, j) {
    var cache = [];
    for (let i = 1; i <= j; i++) {
        cache[i - 1] = (Math.pow(i, 2) - i + 2) / 2;
    }

    return (function climb(n, j) {
		if (typeof cache[n - 1] === "undefined") {
            for (let i = 1; i <= j; i++) {
                if (n - i > 0) {
                    cache[n - 1] += climb(n - i, j);
                }
            }
		}
		return  cache[n - 1];
	})(n, j);
};

var a = climbing(2, 2);
console.log(a);
//-------


var fibonacci = (function(n) {
	var cache = [0, 1];

	// cache 사용
	// fibocacci 1~30 까지 호출시 86회 호출됨
	return function fib(i) {
		callcount++;
		if (typeof cache[i - 1] === "undefined") {
			cache[i - 1] = fib(i - 1) + fib(i - 2);
		}
		return  cache[i - 1];
	};

	// cache 미사용
	// fibocacci 1~30 까지 호출시 4356586회 호출됨
	//
	// return function fib(i) {
	// 	callcount++;
	//
	// 	if (i == 1) return 0;
	// 	if (i == 2) return 1;
	// 	return fib(i - 1) + fib(i - 2);
	// }

})();
