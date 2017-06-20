/*
연속적인 수의 +- 연산

1 부터 9까지의 연속된 수를 + 나 - 를 사용하여 합계가 100이 되는 전체 수를 구하시오.

ex) 1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100
*/

var i = "123456789";

var calc = function(n) {
    if (n.length === 1) {
        return parseInt(n);
    } else {
        return parseInt(n.slice(0, 1)) + parseInt(n.slice(1));
    }
}
