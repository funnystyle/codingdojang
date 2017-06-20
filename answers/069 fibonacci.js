/*
피보나치 수열 구하기

피보나치 수열이란, 첫 번째 항의 값이 0이고 두 번째 항의 값이 1일 때, 이후의 항들은 이전의 두 항을 더한 값으로 이루어지는 수열을 말한다.

예) 0, 1, 1, 2, 3, 5, 8, 13

인풋을 정수 n으로 받았을때, n 이하까지의 피보나치 수열을 출력하는 프로그램을 작성하세요
*/

/*
자바스크립트의 클로저를 사용하여 피보나치 수열을 캐싱하였습니다.
캐싱하지 않았을 경우 아래 코드 주석처럼 호출횟수가 무지막지하게 늘어납니다.
*/

var callcount = 0;
var fibonacci = (function(n) {
	var cache = [0, 1];

	// cache 사용
	// fibocacci 1~30 까지 호출시 86회 호출됨
	return function fib(i) {
		callcount++;
		if (typeof cache[i - 1] === "undefined") {
			cache[i - 1] = fib(i - 1) + fib(i - 2)
		}
		return  cache[i - 1];
	}

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

var print = function(n) {
	for (let i = 1; i <= n; i++) {
		console.log(`${i} : ${fibonacci(i)}`);
	}
};



//-- 그냥 print 하기

var print = function(n) {
	var a1 = 0, a2 = 1, a3 = a1 + a2;
	if (n >= 1) console.log (`1 : ${a1}`);
	if (n >= 2) console.log (`2 : ${a2}`);
	if (n >= 3) {
		for (let i = 3; i <= n; i++) {
			[a1, a2, a3] = [a2, a3, a1 + a2];
			console.log (`${i} : ${a3}`);
		}
	}
};

print(30);
console.log(callcount)
