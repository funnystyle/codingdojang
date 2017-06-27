/*
3이 나타나는 시간을 전부 합하면?

디지털 시계에 하루동안(00:00~23:59) 3이 표시되는 시간을 초로 환산하면 총 몇 초(second) 일까요?

디지털 시계는 하루동안 다음과 같이 시:분(00:00~23:59)으로 표시됩니다.

00:00 (60초간 표시됨)
00:01
00:02
...
23:59
*/

var countsec = function(n) {
    var min = 0;

    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m++) {
            if (("" + h + m).indexOf(n) > -1) min++;
        }
    }

    return min * 60;
};

console.log(countsec(3));

// for-if 구문을 array-filter 로 변환해보았습니다
// 사실, 한 줄로 풀어보고 싶었습니다.
// [0000, 2359] 까지의 배열을 만들어서 3이 들어간 것만 filtering 해서 그 개수를 세서 60을 곱합니다.
// 자바스크립트는 배열 만드는 구문이 좀 기네요 :)
var countsec = n => Array.from(Array(24), (v, h) => Array.from(Array(60), (v, m) => "" + h + m)).reduce((a, b) => a.concat(b), []).filter(v => v.indexOf(n) > -1).length * 60;

console.log(countsec(3));
