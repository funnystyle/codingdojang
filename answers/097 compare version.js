/*
버전비교

A씨는 두 개의 버전을 비교하는 프로그램을 작성해야 한다.

버전은 다음처럼 "." 으로 구분된 문자열이다.

버전 예) 1.0.0, 1.0.23, 1.1

두 개의 버전을 비교하는 프로그램을 작성하시오.

다음은 버전 비교의 예이다.

0.0.2 > 0.0.1
1.0.10 > 1.0.3
1.2.0 > 1.1.99
1.1 > 1.0.1
*/

var parseVer = ver => ver.split(".").map(v => parseInt(v));

var compVer = function (v1, v2) {
    var equality = "=";
    var [s1, s2] = [parseVer(v1), parseVer(v2)];
    var len = Math.max(s1.length, s2.length);

    for (let i = 0; i < len; i++) {
        var [x1, x2] = [s1[i] || 0, s2[i] || 0];

        if (x1 > x2) {
            equality = ">";
            break;
        } else if (x1 < x2) {
            equality = "<";
            break;
        }
    }

    return `${v1} ${equality} ${v2}`;
};

var assertEqual = (a, b) => console.log(a === b);

assertEqual(compVer("0.0.2", "0.0.1"),  "0.0.2 > 0.0.1");
assertEqual(compVer("0.1.2", "3.0.1"),  "0.1.2 < 3.0.1");
assertEqual(compVer("1.0.0", "1.0"),    "1.0.0 = 1.0");
assertEqual(compVer("1.2.0", "1.1.99"), "1.2.0 > 1.1.99");
assertEqual(compVer("1.1", "1.0.1"),    "1.1 > 1.0.1");
assertEqual(compVer("3.01", "3.1"),     "3.01 = 3.1"); 
