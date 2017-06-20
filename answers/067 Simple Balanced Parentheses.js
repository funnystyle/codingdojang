/*
Simple Balanced Parentheses

출처: http://interactivepython.org/courselib/static/pythonds/BasicDS/SimpleBalancedParentheses.html

아래는 괄호를 이용한 연산식이다.

(5+6)*(7+8)/(4+3)
우리는 여는 괄호가 있으면 닫는 괄호가 반드시 있어야 한다는 것을 잘 알고 있다.

다음은 정상적인(balanced) 괄호 사용의 예이다.

(()()()())
(((())))
(()((())()))
다음은 비정상적인(not balanced) 괄호 사용의 예이다.

((((((())
()))
(()()(()
(()))(
())(()
괄호의 사용이 잘 되었는지 잘못 되었는지 판별 해 주는 프로그램을 작성하시오.
*/

var balanced = function(parens) {
    var stack = 0;
    var pushpop = { "(" : 1, ")" : -1 };

    for (p of parens.split("")) {
        stack += pushpop[p];
        if (stack < 0) return false;
    }
    return stack === 0;
};


// true
console.log(balanced("(()()()())"));
console.log(balanced("(((())))"));
console.log(balanced("(()((())()))"));

// false
console.log(balanced("((((((())"));
console.log(balanced("()))"));
console.log(balanced("(()()(()"));
console.log(balanced("(()))("));
console.log(balanced("())(()"));
