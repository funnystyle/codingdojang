/*
넥슨 입사문제 중에서

어떤 자연수 n이 있을 때, d(n)을 n의 각 자릿수 숫자들과 n 자신을 더한 숫자라고 정의하자.

예를 들어

d(91) = 9 + 1 + 91 = 101
이 때, n을 d(n)의 제네레이터(generator)라고 한다. 위의 예에서 91은 101의 제네레이터이다.

어떤 숫자들은 하나 이상의 제네레이터를 가지고 있는데, 101의 제네레이터는 91 뿐 아니라 100도 있다. 그런데 반대로, 제네레이터가 없는 숫자들도 있으며, 이런 숫자를 인도의 수학자 Kaprekar가 셀프 넘버(self-number)라 이름 붙였다. 예를 들어 1,3,5,7,9,20,31 은 셀프 넘버 들이다.

1 이상이고 5000 보다 작은 모든 셀프 넘버들의 합을 구하라.
*/

var selfnumbers = Array.from(Array(5000), (_, i) => i + 1);
var add = (a, b) => a + b;
var str2int = s => parseInt(s, 10)
var gen = n => n + ("" + n).split('').map(str2int).reduce(add);

for (let i = 1; i <= 5000; i++) {
    selfnumbers[gen(i) - 1] = 0;
}

var sum = selfnumbers.reduce(add);

console.log(sum);

//for 문 없이 아래와 같이 할 수도 있는데, 그러면 selfnumbers 가 chain 되지 않아서 .reduce 를 chain 할 수가 없음

selfnumbers.map((v, i, a) => { a[gen(i + 1) - 1] = 0 })
var sum = selfnumbers.reduce(add);




///---

var selfnumbers = Array.from(Array(5000), (value, index) => index + 1);

var add = (a, b) => a + b;
var str2int = s => parseInt(s, 10)
var gen = n => n + ("" + n).split('').map(str2int).reduce(add);

selfnumbers.map((v, i, a) => { a[gen(i + 1) - 1] = 0 })
var sum = selfnumbers.reduce(add);

console.log(sum);






for (let i = 1; i <= 5000; i++) {
	generators[gen(i)] = 0;
}

var count = generators.reduce(add);

console.log(count);






//
var selfnumbers = Array.from(Array(5000), (_, i) => i + 1);
var add = (a, b) => a + b;
var str2int = s => parseInt(s, 10)
var gen = n => n + ("" + n).split('').map(str2int).reduce(add);

for (let i = 1; i <= 5000; i++) {
	selfnumbers[gen(i) - 1] = 0;
}

var count = selfnumbers.reduce(add);

console.log(count);



//



var selfnumbers = Array.from(Array(5000), (value, index) => index + 1);

var add = (a, b) => a + b;
var str2int = s => parseInt(s, 10)
var gen = n => n + ("" + n).split('').map(str2int).reduce(add);

selfnumbers.map((v, i, a) => { a[gen(i + 1) - 1] = 0 })
var sum = selfnumbers.reduce(add);

console.log(sum);
