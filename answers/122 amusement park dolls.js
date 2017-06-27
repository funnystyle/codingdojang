/*
놀이공원 인형 맞추기

놀이공원에 가면 인형 맞추기 게임이 있다.

한 놀이공원에는 인형에 숫자를 써놓고 인형 맞추기를 한다.

그런데 맞춘 인형의 숫자의 합이 특정한 값이 되는 경우에만 맞춘 인형을 가져 갈 수 있다.

가령 10개의 인형에 쓰여진 숫자가 각각 25 27 3 12 6 15 9 30 21 19이고 숫자의 합이 50이 되는 경우만 인형을 가져갈수 있다면 6 19 25가 쓰여진 인형을 맞춰야 인형을 가져 갈 수 있다.

이때 인형의 갯수와 각각의 숫자와 필요한 합을 입력받으면 맞춰야 하는 인형의 숫자를 출력하는 프로그램을 작성해 보자.

입력 - 첫줄에는 인형의 갯수와 필요한 합, 둘째줄에는 인형 각각에 쓰여진 숫자

예)

10 50
25 27 3 12 6 15 9 30 21 19

출력 - 필요한 합이 되는 인형 각각의 숫자를 오름차순으로 출력

예)

6 19 25
*/

var input =
`10 50
25 27 3 12 6 15 9 30 21 19`;

var [[count, sum], dolls] = input.split("\n").map($ => $.split(" ").map($ => parseInt($)));

var combination = function combination(array){
    if (array.length === 0)
        return [[]];
    var combs = [];
    for (var i = 0; i <= array.length; i++){
        var head = array.slice(i, i + 1),
            tail = array.slice(i + 1),
            tailcombs = combination(tail),
            flat = $ => head.concat($);
        combs.push(...tailcombs.map(flat));
    }
    return combs;
};

var result = combination(dolls).filter($ => $.reduce((a, b) => a + b, 0) === sum)
                               .map($ => $.sort((a, b) => a - b));

console.log(result.map($ => $.join(" ")).join("\n"));
