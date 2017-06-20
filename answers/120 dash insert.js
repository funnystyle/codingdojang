/*
Dash Insert

DashInsert 함수는 숫자로 구성된 문자열을 입력받은 뒤, 문자열 내에서 홀수가 연속되면 두 수 사이에 - 를 추가하고, 짝수가 연속되면 * 를 추가하는 기능을 갖고 있다. (예, 454 => 454, 4546793 => 454*67-9-3) DashInsert 함수를 완성하자. 출처

입력 - 화면에서 숫자로 된 문자열을 입력받는다.
"4546793"
출력 - *, -가 적절히 추가된 문자열을 화면에 출력한다.
"454*67-9-3"
*/

var dashInsert = n => ("" + n).replace(/([13579]{2,})|([24680]{2,})/g, (_, o, e) => _.split("").join(o && "-" || e && "*"));

console.log(dashInsert(4546793));


//---
var n = 4546793;

var s = ("" + n).replace(/([13579])([13579])/g,(_,a,b)=>a+"-"+b)
    	        .replace(/([24680])([24680])/g,(_,a,b)=>a+"*"+b);

console.log(s);


var n = 4546793;


var dashInsert = function(n) {
    return ("" + n).replace(/([13579]+)|([24680]+)/g, function(_, odd, even) {
        return (odd || "").split("").join("-") + (even || "").split("").join("*")
    });
};

console.log(dashInsert(4546793));



var dashInsert = n => ("" + n).replace(/([13579]{2,})|([24680]{2,})/g, (_, o, e) => _.split("").join(o && "-" || e && "*"));

console.log(dashInsert(4546793));


var dashInsert = function(n) {
    return ("" + n).split("").reduce((x,y) => x + ["*","","-"][+x.slice(-1) % 2 + (+y) % 2] + y);
};
console.log(dashInsert(4546793));
