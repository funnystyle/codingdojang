/*
아마존 면접문제 중에서

출처 : http://www.careercup.com/question?id=7528760

아마존 면접문제

다음과 같은 형태의 배열을

[a1,a2,a3...,an,b1,b2...bn]
다음과 같은 형태로 바꾸시오

[a1,b1,a2,b2.....an,bn]
*/

/*
일단, 주어진 입력 list 외의 저장소를 쓰지 않는 조건으로 풀었습니다.

makelist 는 n 이 주어졌을 때 list 만드는 함수이니 신경 안써도 되고요.

소트의 원리는 이렇습니다.

a1  a2  a3  a4  a5  b1  b2  b3  b4  b5
인 경우에 b1 을 제자리에 놓으려면

index = 1인 a2 부터 index = n + 1 b1 까지의 sublist 를 가지고
[a2, a3, a4, a5, b1] => [b1, a2, a3, a4, a5] 하면 되겠죠

아래와 같이 swap 을 진행하면 됩니다.
[a2, a3, a4, a5, b1] => a2 와 b1 => [b1, a3, a4, a5, a2]
[b1, a3, a4, a5, a2] => a3 와 a2 => [b1, a2, a4, a5, a3]
[b1, a2, a4, a5, a3] => a4 와 a3 => [b1, a2, a3, a5, a4]
[b1, a2, a3, a5, a4] => a5 와 a4 => [b1, a2, a3, a4, a5]

이렇게 하면
a1  a2  a3  a4  a5  b1  b2  b3  b4  b5 가
a1  b1  a2  a3  a4  a5  b2  b3  b4  b5 로 바뀝니다.

그 다음에는 계속 반복하면 되지요.
[a3  a4  a5  b2] => [b2 a3  a4  a5] 하면 되겠습니다.
같은 방법을 쓰면 되요

처음 인덱스는 2씩 늘어나고 (1, 3, 5 ...) 마지막 인덱스는 1씩 늘어납니다.
그래서 복잡도는...

어쨌든, in-place storage 를 이용해서 풀어봤습니다.
*/

var makelist = n => Array.from(Array(n), (v, i) => `a${i + 1}`).concat(Array.from(Array(n), (v, i) => `b${i + 1}`));

var amazonsort = function(list) {
	var n = list.length / 2;
	for (let i = 1; i < n; i++) {
		for (let j = i * 2 - 1; j < n + i; j++) {
			[list[j], list[n + i - 1]] = [list[n + i - 1], list[j]];
		}
	}
	return list;
};

var list = makelist(10);
console.log(amazonsort(list).join(" "));
