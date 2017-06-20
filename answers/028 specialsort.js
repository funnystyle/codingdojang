/*
Special Sort

출처 : http://www.careercup.com/question?id=5201559730257920

구글 전화면접 문제

n개의 정수를 가진 배열이 있다. 이 배열은 양의정수와 음의 정수를 모두 가지고 있다. 이제 당신은 이 배열을 좀 특별한 방법으로 정렬해야 한다.

정렬이 되고 난 후, 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.

예. -1 1 3 -2 2 ans: -1 -2 1 3 2.
*/

/*
원글을 보니 O(n) 의 시간복잡도와 O(1) 의 공간복잡도로 풀라고 하고 있네요.
머리좀 쥐어뜯다가 포기했습니다.
어떻게 푸나요?
아래는 그냥 쉬운방법으로 ㅠㅠ
*/

var list = [-1, 1, 3, -2, 2];

var minus = v => v < 0;
var plus = v => v > 0;
var zero = v => v === 0;
var answer = list.filter(minus).concat(list.filter(zero), list.filter(plus));

console.log(`ans : ${answer.join(" ")}`);


var list = [-1, 1, 3, -2, 2];
var count = 0;
for (v of list) {
	if (v < 0) count++;
}


var list = [-1, 1, 3, -2, 2];
var memory = 0; // O(1)
var cursor = 0;
for (let i = 0; i < list.length; i++) { // O(n)
	if (cursor === i) {
		if (list[i] > 0) {
			memory = list[i]; // remember plus
			console.log("0 mem : " + memory);
		} else if (list[i] < 0) {
			cursor++; // pass minus
			console.log("1 cur : " + cursor);
		}
	} else if (cursor < i) {
		if (list[i] > 0) {
			list[cursor] = list[i];
			list[i] = memory;
			memory = list[cursor];
			console.log("3 list : " + list.join(" ") + " [" + memory + "]");
		} else if (list[i] < 0) {
			list[cursor] = list[i];
			list[i] = memory;
			memory = list[cursor];
			cursor++; // pass minus
			console.log("4 mem : " + memory);
			console.log("5 cur : " + cursor);
			console.log("6 list : " + list.join(" ") + " [" + memory + "]");
		}
	}
}
console.log(list.join(" "));





var list = [-3, 2, -4, 5, -6];
var memory = 0; // O(1)
var cursor = 0;
for (let i = 0; i < list.length; i++) { // O(n)
	console.log("cur : " + cursor + " / i : " + i);
	if (cursor === i) {
		if (list[i] > 0) {
		} else if (list[i] < 0) {
			cursor++; // pass minus
		}
	} else if (cursor < i) {
		if (list[i] > 0) {
			if (i === list.length - 1) {
				cursor = list.length;
				break;
			}
			memory = list[cursor];
			list[cursor] = list[i];
			list[i] = memory;
			console.log("2 cur : " + cursor);
			console.log("3 list : " + list.join(" ") + " [" + memory + "]");
		} else if (list[i] < 0) {
			memory = list[cursor];
			list[cursor] = list[i];
			list[i] = memory;
			cursor++; // pass minus
			console.log("5 cur : " + cursor);
			console.log("6 list : " + list.join(" ") + " [" + memory + "]");
		}
	}
}

// for (let i = cursor; i < list.length; i++) {
// 	memory = list[cursor];
// 	list[cursor] = list[i];
// 	list[i] = memory;
// }
console.log("7 list : " + list.join(" ") + " [" + memory + "]");
