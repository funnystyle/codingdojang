/*
LISP 계산기

LISP은 괄호로 유명한 언어다. 이 문제는 LISP 형태로 표현된 4칙연산 산술식을 계산하는 계산기 프로그램을 작성하는 것이다.

LISP 표현식은 여는 괄호와 공백으로 구분된 항(term)의 목록 그리고 닫는 괄호로 만들어진다.
첫 번째 항은 +, -, *, /와 같은 심볼이며 나머지 항은 1, 2, 10, -10 등의 정수 혹은 또다른 LISP 표현식이 될 수 있다.
말하자면 연산자들이 가변 길이 인자를 받는 셈이다.

더하기의 경우 (+ 1 2 3)은 6이다. (+)만 단독으로 사용된 경우는 0이다.
곱하기의 경우는 기본 값이 1이고, 빼기와 나누기는 인자가 최소 하나 이상 있어야 한다.
아래는 빼기와 곱하기의 예를 보여준다. (화살표는 결과값을 나타낸다)

(- 10 3) → 7
(- 10 3 5)  → 2
(* 2 3) → 6
(* 2 3 4) → 24
괄호가 중쳡된 경우는 아래와 같다.

(* (+ 2 3) (- 5 3)) → 10
(/ (+ 9 1) (+ 2 3)) → 2
모두 괄호로 묶여있기 때문에 +, -, *, / 연산자 사이의 우선순위는 따로 신경쓸 필요 없다.
*/

var input1 = "(+ 10 3)";
var input1 = "(- 10 3)";
var input2 = "(- 10 3 5)";
var input3 = "(* 2 3)";
var input4 = "(* (+ 2 3) (- 5 3))";
var input5 = "(/ (+ 9 1) (+ 2 3))";
var input5 = "(+)";

var calc = {
    "+" : (x, y) => x + y,
    "-" : (x, y) => x - y,
    "*" : (x, y) => x * y,
    "/" : (x, y) => x / y
};

var init = {
    "+" : "0 ",
    "*" : "1 ",
    "-" : "",
    "/" : "",
};

var lisp = function (input) {
    var reg = /\(([+*])(?:\s+(\d+))*\)|\(([\-/])(?:\s+(\d+))+\)/g;

    while(input.match(reg)) {
        console.log(input);
        input = input.replace(reg, function(str, pm, n, md) {
            return `${init[pm || md] + str.slice(2, -1).trim()}`.split(" ")
                        .slice(1)
                        .map(v => parseInt(v))
                        .reduce(calc[pm || md]);
        });
    }
    return input;
};

console.log(lisp(input1));
console.log(lisp(input2));
console.log(lisp(input3));
console.log(lisp(input4));
console.log(lisp(input5));


// [1, 2, 3].reduce((a, b) => a * b, 1);
