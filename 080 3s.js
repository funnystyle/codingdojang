xx:x3
xx:3x
x3:xx

03:00 - 03:59 
13:00 - 13:59

00:30 - 00:39 - 9분 : 

var countsec = function(n) {
    var min = 0;

    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m++) {
            if (("" + h + m).indexOf(n) > -1) min++;
        }
    }
    
    return min * 60;
}

console.log(countsec(3));

// for-if 구문을 array-filter 로 변환해보았습니다
// 사실, 한 줄로 풀어보고 싶었습니다.
// [0000, 2359] 까지의 배열을 만들어서 3이 들어간 것만 filtering 해서 그 개수를 세서 60을 곱합니다.
// 자바스크립트는 배열 만드는 구문이 좀 기네요 :)
var countsec = n => Array.from(Array(24), (v, h) => Array.from(Array(60), (v, m) => "" + h + m)).reduce((a, b) => a.concat(b), []).filter(v => v.indexOf(n) > -1).length * 60;

console.log(countsec(3));
