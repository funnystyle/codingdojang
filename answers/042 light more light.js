/*
Light More Light

출처: programming challenges

우리 학교에는 복도 불을 켜고 끄는 마부(Mabu)라는 사람이 있다. 전구마다 불을 켜고 끄는 스위치가 있다. 불이 꺼져 있을 때 스위치를 누르면 불이 켜지고 다시 스위치를 누르면 불이 꺼진다. 처음에는 모든 전구가 꺼져 있다. 마부라는 사람은 특이한 행동을 한다. 복도에 n개의 전구가 있으면, 복도를 n번 왕복한다. i번째 갈 때 그는 i로 나누어 떨어지는 위치에 있는 스위치만 누른다. 처음 위치로 돌아올 때는 아무 스위치도 건드리지 않는다. i번째 왕복은 (이런 이상한 행동을 하면서) 복도를 한 번 갔다가 오는 것으로 정의된다. 마지막 전구의 최종 상태를 알아내자. 과연 그 전구는 켜져 있을까 아니면 꺼져 있을까?

Input

복도에 있는 n번째 전구를 나타내는 숫자가 입력된다. (2^32-1 이하의 정수가 입력된다.) 0은 입력의 끝을 의미하며 그 값은 처리하지 않는다.

Output

그 전구가 켜져 있으면 "yes"를, 꺼져 있으면 "no"를 출력한다. 테스트 케이스마다 한 줄에 하나씩 출력한다.

Sample Input

3
6241
8191
0
Sample Output

no
yes
no
*/


// 최초 꺼진 상태였으므로 스위치가 홀수번 눌렸으면 켜 있다.
// 즉, n 의 약수의 개수가 홀수개면 된다.
// 약수의 개수는 소인수분해 후 (지수+1)들을 다 곱하는 것이므로
// 그 곱이 홀수이려면 (지수+1)이 다 홀수, 즉 지수가 다 짝수여야 한다.
// 이런 수는 모두 x^2 으로 나타낼 수 있으므로
// 제곱수인지 아닌지를 판단하면 된다
var isOn = function (n) {
    return Number.isInteger(Math.sqrt(n))
};

var input=
`3
6241
8191
0`;

var line = input.split("\n").map(v => parseInt(v));
for (n of line) {
    if (n === 0) break;
    console.log(isOn(n) ? "yes" : "no");
}