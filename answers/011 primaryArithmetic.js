/*
Primary Arithmetic

첫 번째 계산

아이들은 여러 자리 숫자들을 더하기 위해서 우에서 좌로 숫자를 하나씩 차례대로 더 하라고 배웠다. 1을 한 숫자 위치에서 다음 자리로 더하기위해 이동하는 "한자리올림"연산을 많이 발견하는 것은 중요한 도전이 된다. 당신의 일은 교육자가 그들의 어려움을 평가하기 위하여, 덧셈 문제들의 각 집합에 대해서 한자리올림 연산들의 수를 계산하는 것이다.

입력

입력의 각 라인은 10개의 숫자들보다 미만인 양의 정수들 두 개를 포함한다. 입력의 마지막 라인은 0 0 을 포한한다.

출력

마지막을 제외한 입력의 각 라인에 대해서 당신은 두 숫자들을 더한 결과에서 한자리올림 연산들의 수를 아래 처럼 보여지는 형식으로 계산하여 출력해야 한다.

입력 샘플

123 456
555 555
123 594
0 0
출력 샘플

No carry operation.
3 carry operations.
1 carry operation.
*/

var arr = [1,2,3,4];
var arr2 = [1,1,1,2];

var squares = arr.map((a, i) => a + arr2[i]);

console.log(squares);


var input = `
123 456
555 555
123 594
0 0
`

var inputs = input.split("\n").map(v => v.trim());

var i = "555 555";

var inputs = i.split(" ");
var sum = (+inputs[0]) + (+inputs[1]);

var arr1 = inputs[0].split("").reverse();
var arr2 = inputs[1].split("").reverse();
var carry = ("" + sum).split("").reverse();

var c = carry.map((v, i) => v < Math.max(arr1[i], arr2[i]) ? 1 : 0).reduce((a, b) => a + b);
console.log(`${c ? c : "No"} carry operation${c > 1 ? "s" : ""}.`);


var carry = Array.from(Array(Math.max(arr1.length, arr2.length)), () => 0);

//carry.map((v, i, c) => (arr1[i] || 0) + (arr2[i] || 0) + (c[i - 1] || 0) >= 10 ? v = 1 : v = 0);

carry.map(function(v, i, c) {
	console.log(arr1[i]);
	console.log((parseInt(arr1[i], 10) || 0));
	console.log((parseInt(arr1[i], 10) || 0) + (parseInt(arr2[i], 10) || 0) + (c[i - 1] ? c[i - 1] : 0));

	if ((parseInt(arr1[i], 10) || 0) + (parseInt(arr2[i], 10) || 0) + (c[i - 1] ? c[i - 1] : 0) >= 10) {
		return 1;
	} else {
		return 0;
	}
});
console.log(carry);

var c = carry.reduce((a, b) => a + b);

console.log(`${c ? c : "No"} carry operation${c > 1 ? "s" : ""}.`);


123 456  579
555 555 1110
123 594  717
0 0



// --



var countCarry = function(input) {
	var inputs = input.split("\n").map(v => v.trim());

	for (line of inputs) {
		var [num1, num2] = line.split(" ").map(v => parseInt(v, 10));
		var sum = num1 + num2;
		if (sum === 0) return;

		var arr1 = ("" + num1).split("").reverse();
		var arr2 = ("" + num2).split("").reverse();
		var carry = ("" + sum).split("").reverse();

		var c = carry.map((v, i) => v < Math.max(arr1[i] || 0, arr2[i] || 0) ? 1 : 0).reduce((a, b) => a + b);

		console.log(`${c ? c : "No"} carry operation${c > 1 ? "s" : ""}.`);

	}
};

var input =
`123 456
555 555
123 594
9999999999 1
19999544 456
508 12
1 9999999999
678 322
0 0`;

countCarry(input);
