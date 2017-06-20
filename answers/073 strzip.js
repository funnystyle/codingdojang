/*
문자열 압축하기

문자열을 입력받아서, 같은 문자가 연속적으로 반복되는 경우에 그 반복 횟수를 표시하여 문자열을 압축하기.

입력 예시: aaabbcccccca

출력 예시: a3b2c6a1
*/

var strzip = function(str) {
    var same = 1, zip = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            same++;
        } else {
            zip += str[i] + same;
            same = 1;
        }
    }
    return zip;
};


console.log(strzip("aaabbcccccca"));
console.log(strzip("abcdefg"));




var strzip = function(str) {
    return str.replace(/(\w)\1*/g, (str, ch) => ch + str.length);
};

console.log(strzip("aaabbcccccca"));
console.log(strzip("abcdefg"));
