/*
핑퐁게임

출처: https://brunch.co.kr/@sunghokimnxag/5

일련의 숫자가 있고, 이 숫자는 1씩 증가, 또는 감소한다. n번째의 숫자가 있을 시에, 이 숫자가 7의 배수(7, 14, 21,...)거나 7이란 숫자를 포함할 시에 (7, 17, 27,...) 방향을 바꾼다.

즉, 다음과 같이 숫자는 진행한다.

1,2,3,4,5,6,[7],6,5,4,3,2,1,[0],1,2,[3],2,1,0,[-1],0,1
(첫 번째 7은 7번째, 두번째 0은 14번째, 세번째 3은 17번째, 네번째 -1은 21번째)

이와 같은 pingpong(x)의 함수를 작성하라. 예시의 인풋과 아웃풋은 다음과 같다.

pingpong(8) = 6
pingpong(22) = 0
pingpong(68) = 2
pingpong(100) = 2
심화학습

위 문제에 다음과 같은 제약을 추가하여 다시 풀어보자.

For Loop 또는 Array를 쓰지 말 것
Assignment를 쓰지 말 것, 즉, 변수 할당을 하지 말 것.
String을 쓰지 말 것
*/

var direction = (c, d) => c % 7 === 0 || /7/.test(c) ? -d : d;
var pingpong = function(t, n = 0, c = 1, d = 1) {
    return c === t ? n + d : pingpong(t, n + d, c + 1, direction(c, d));
};

console.log(pingpong(8)); // = 6
console.log(pingpong(22)); // = 0
console.log(pingpong(68)); // = 2
console.log(pingpong(100)); // = 2

//----

var turn = c => c % 7 === 0 || `${c}`.split("").indexOf("7") > -1;

var pingpong = function(t, n = 0, c = 1, d = 1) {
    return c === t ? n + d :
           turn(c) ? pingpong(t, n + d, c + 1, -d) :
                     pingpong(t, n + d, c + 1, d);
};

console.log(pingpong(8)); // = 6
console.log(pingpong(22)); // = 0
console.log(pingpong(68)); // = 2
console.log(pingpong(100)); // = 2

//---
