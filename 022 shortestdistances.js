/*
다음 입사문제 중에서

1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.
*/

var input = [1, 3, 4, 8, 13, 17, 20];

var distance = (a, b) => Math.abs(a - b);

var min = Number.MAX_VALUE;
var shortest = [];

input.reduce((a, b) => {
	var d = distance(a, b);
	if (d < min) {
		min = d;
		if (shortest)
	}
};


///--

// 1 최소값 저장하기

var s = [1, 3, 4, 8, 13, 17, 20];

var shortests     = [],
    MIN = Number.MAX_VALUE;

s.reduce(function(a, b) {
    var d = Math.abs(a - b);

    if (d === MIN) {
        shortests.push([a, b]);
    }

    if (d < MIN) {
        MIN = d;
        shortests = [[a, b]];
    }

    return b;
});

for (s of shortests) {
    console.log(`(${s[0]}, ${s[1]})`);
}

// 2 dictionary 자료구조 이용 (정렬 가정)

var s = [1, 3, 4, 8, 13, 17, 20];

var dictionary = [];

s.reduce((a, b) => {
    dictionary[b - a] ? dictionary[b - a].push([a, b]) : dictionary[b - a] = [[a, b]];
    return b;
});

for (d of dictionary.filter(v => v)[0]) {
    console.log(`(${d[0]}, ${d[1]})`);
}
