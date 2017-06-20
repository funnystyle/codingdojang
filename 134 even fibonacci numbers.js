/*
Even Fibonacci numbers

출처 : 프로젝트 오일러 2번문제, 한글 번역판

피보나치 수열의 각 항은 바로 앞의 항 두 개를 더한 것이 됩니다. 1과 2로 시작하는 경우 이 수열은 아래와 같습니다.

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

짝수이면서 4백만 이하인 모든 항을 더하면 얼마가 됩니까?
*/

var fibonacci = (function(n) {
	var cache = [0, 1, 2];

	return function fib(i) {
		return cache[i] ? cache[i] : cache[i] = fib(i - 1) + fib(i - 2);
	}
})();

var res = 0,
	sum = 0;

for (let i = 1; (res = fibonacci(i)) <= 4000000; i++) {
	if (res % 2 === 0) {
		sum += res;
	}
}

console.log(sum);
