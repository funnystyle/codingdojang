/*
시침과 분침이 직각이 되는 순간은?

문제

일반적인 1부터 12까지 아라비아 숫자가 적혀있는 시계가 있습니다.
이 시계는 오전 12:00 정각에 작동하기 시작하여 하루동안 움직이게 되어있습니다.
이 때 시침과 분침이 직각이 될 때의 시간을 hh:mm 형태로 나타내고 하루동안 직각이 된 총 횟수를 구해보세요!
출력(예시)

09:00
15:00
...

Total: n번!

시간표현은 오전, 오후가 아닌 24시 방식으로 써주세요!
*/

// 24 * 60
// 분침은 60:360 = 1 : 6
// 시침은 60: 30 = 1 : 0.5
//
// 12:00 부터 시작

var minAngle = function(sec) {
    return (sec / 10) % 360;
};

var hourAngle = function(sec) {
    return (sec / 120) % 360;
};

var getTime = function(sec) {
    return `${("0" + parseInt(sec / 3600)).slice(-2)}:${("0" + parseInt((sec % 3600) / 60)).slice(-2)}`;
};

var count = 0;
var now = 0;
var prev = 0;
for (let i = 0; i < 86400; i++) {
    now = Math.abs(hourAngle(i) - minAngle(i));

    // 이전각을 기억하여 89-90/269-270 변할 때를 체크
    if ((parseInt(prev) === 89 && parseInt(now) === 90) ||
            (parseInt(prev) === 90 && parseInt(now) === 89) ||
            (parseInt(prev) === 269 && parseInt(now) === 270) ||
            (parseInt(prev) === 270 && parseInt(now) === 269)) {
        console.log(getTime(i));
        count++;
    }
    prev = now;
}

console.log(`${count}번`);
//--
