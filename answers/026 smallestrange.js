/*
Smallest Range

출처 : http://www.careercup.com/question?id=16759664

구글 입사 문제, 대인 면접문제

정렬된 k개의 리스트가 있다.

k개의 리스트 중 적어도 한개의 숫자를 포함하는 구간 간격이 가장 작은 숫자의 범위를 구하시오.

예:

List 1: [4, 10, 15, 24, 26]
List 2: [0, 9, 12, 20]
List 3: [5, 18, 22, 30]
위 예에서 구간 간격이 가장 작은 숫자의 범위는 [20, 24] 이다. [20, 24]의 구간 간격은 4이다. 이 범위는 List 1에서는 24, List 2는 20, List 3에서는 22를 포함한다.
*/

var list = [
	[4, 10, 15, 24, 26],
	[0, 9, 12, 20],
	[5, 18, 22, 30]
];

var mergesorted = list.reduce((a, b) => a.concat(b), []).sort((a, b) => a - b);
var min = Number.MAX_VALUE;
var result = [];
var answer = [];

for (let v of mergesorted) {
	for (let i = 0; i < list.length; i++) {
		for (let k of list[i]) {
			result[i] = list[i][list[i].length - 1];
			if (k >= v) {
				result[i] = k;
				break;
			}
		}
	}

	result = result.sort((a, b) => a - b);
	result = result.slice(0, 1).concat(result.slice(result.length - 1));
	distance = result[1] - result[0];
	if (distance < min) {
		answer = Array.from(result);
		min = distance;
	}
}

console.log(answer.join(" "));
console.log(min);


var getTuple = (list, index) => list.map((v, i) => v[index[i]]);
var outOfBounds = tuple => tuple.length !== tuple.filter(v => typeof v !== "undefined").length;

var getSmallestRange = function(list) {
	var index = Array.from(Array(list.length), () => 0),
		diff = Number.MAX_VALUE,
		range = [];

	for (var tuple = getTuple(list, index); !outOfBounds(tuple); tuple = getTuple(list, index)) {
		var [min, max] = [Math.min(...tuple), Math.max(...tuple)];
		if (max - min <= diff) {
			diff = max - min;
			range = [min, max];
		}
		index[tuple.indexOf(min)]++;
	}
	return range;
};

var list = [
	[4, 10, 15, 24, 26],
	[0, 9, 12, 20],
	[5, 18, 22, 30]
];

var range = getSmallestRange(list);

console.log(`[${range.join(" ")}]`);


console.log(range[1] - range[0]);


while (!outofbounds(tuple)) {
	var tuple = list.map((v, i) => v[index[i]]);
	index[tuple.indexOf(Math.max(...tuple))] ++;
}





tuple.indexOf(Math.max(...tuple));
