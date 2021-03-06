/*
1차원 라이프 게임

출처: http://www.codechef.com/problems/LIFE

콘웨이의 라이프 게임(Conway's Game of Life)은 세포 시뮬레이션 알고리즘입니다. 각 세포는 살아있거나 죽어있는 두 상태가 있으며, 시뮬레이션 각 단계마다 주변 세포의 상태에 따라 자신의 상태를 갱신합니다. 이번 문제는 1차원 라이프 게임에 관한 것입니다.

0번부터 N-1까지의 N개의 세포가 있다고 합시다. i번째 세포의 이웃은 i-1번째와 i+1번째의 세포가 될 것입니다. 양 끝의 세포들은 모듈로(modulo) 값으로 이웃을 구합니다. 예를 들어, 0번 세포는 1번과 N-1번째가 이웃이 됩니다.

이제 라이프 게임의 규칙을 설명합니다.

매 단계마다 각 세포들은 자신의 두 이웃을 봅니다. 만약 두 이웃의 상태가 모두 같다면, 자신의 상태는 그대로 유지합니다. 만약 두 이웃의 상태가 다르다면, 자신의 상태를 바꿉니다. 이 규칙으로 다음 상태로 전이합니다. (다르게 말하면 오직 한 이웃만이 살아있을 때 자신의 상태를 바꾼다라고 표현할 수 있습니다.)

예를 들어, 8개의 세포, 01100101 을 생각해봅시다. 0은 죽어있는 상태, 1은 살아있는 상태라고 하죠.

0과 6번 세포는 모두 살아있는 이웃이 있습니다. 상태를 유지합니다.
5, 7번 세포는 살아있는 이웃이 없습니다. 상태를 유지합니다.
1, 2, 3, 4번 세포는 하나만 살아있는 이웃이 있습니다. 상태를 바꿉니다.
따라서 다음 단계는 00011101이 됩니다.

이번 코딩 문제는 주어진 세포 상태가 있을 때, "직전의 단계"를 구하는 것입니다. 어떨 때는 여러 이전 단계가 있을 수도 있고 불가능할 수도 있습니다.

주어진 세포 상태의 직전 단계가 유일하다면 그것을 출력하고, 없다면 "No", 여러 개라면 "Multiple"을 출력하는 코드를 만들어 보세요.

예: (꼭 인터페이스를 이렇게 할 필요는 없습니다)

computePrevState("00011101") == "01100101"
computePrevState("000") == "Multiple"
computePrevState("000001") == "No"
computePrevState("11110") == "10010"
입력 문자열의 길이는 3에서 50까지로 가정합니다.
*/

/*
    x 양쪽에 a 와 b 가 있을 때 x -> y 상태 변화를 표로 나타내면 다음과 같습니다.

    a x b -> y
    0 0 0    0
    0 0 1    1
    0 1 0    1
    0 1 1    0
    1 0 0    1
    1 0 1    0
    1 1 0    0
    1 1 1    1

    위 표에서
    y = a XOR x XOR b 임을 알 수 있습니다. (이후 간단히 y=a^x^b 라 하겠습니다.)
    XOR 관계의 특성상 좌변의 문자와 우변의 문자를 바꿔도 식이 성립합니다.
    교환법칙은 말할 것도 없구요.

    즉
    y=a^x^b 라면 a=y^x^b, x=a^y^b, b=a^x^y 가 다 성립합니다.
    이를 토대로 첫 상태가 1001 인 경우를 예를 들어보면
    1001 -> 0110 이 됨을 알 수 있는데 0110 을 가지고 1001 을 재구성하면 되지요.

    00, 01, 10, 11 의 네 가지 케이스를 가지고 0110 의 숫자 하나씩 XOR을 계산을 해서 붙여봅니다.

       0 1 1 0
    00 0        : 0^0^0 = 0 (처음 0 두 개는 왼쪽의 00, 세번째 0 은 위쪽의 첫 0)
    00 0 1      : 0^1^1 = 0
    00 0 1 0    : 1^0^1 = 0
    00 0 1 0 1  : 1^0^0 = 1

    이제 계산이 다 끝났으면 처음 구성한 00 과 마지막 두 숫자가 일치하는지를 봅니다.
    00 != 01 이지요 이렇다면 이것은 불가능한 케이스입니다.
    숫자가 rotation 이 일어날 수 없기 때문이지요.
    00 뿐 아니라 01, 10 도 마찬가지로 불가능한 케이스입니다.

    11 의 경우를 보겠습니다.

       0 1 1 0
    11 0        : 1^1^0 = 0
    11 0 0      : 1^0^1 = 0
    11 0 0 1    : 0^0^1 = 1
    11 0 0 1 1  : 0^1^0 = 1

    이 경우는 앞의 11 과 뒤의 11 이 일치합니다. 따라서 수열은 완성됩니다.
    이제 이 6 개의 수열(110011)가지고 을 원래의 1001 을 구성해내면 되는데요
    처음 보았던 XOR 연산을 생각해 보면 아주 쉽습니다.

              0(y) 1 1 0
    1(a) 1(x) 0(b) 0 1 1

    윗줄의 첫 0 과 아랫줄의 첫 1 1 을 XOR 한 것이 아랫줄의 세번째 0 이지요
    제일 처음 식 y=a^x^b 를 기억하실 겁니다.
    우리는 이 중 a, x, y 를 가지고 b 를 만들었던 겁니다. (a^x^y=b)
    이 식을 가지고 y=a^x^b 를 구성할 수 있죠.
    따라서 우리가 원래 찾아야 하는 x 는 아랫줄 두번째 1 이 되는 거지요

    그렇게 생각하면 110011 중
    두번째부터 다섯번째까지의 1001 이 이전 상태의 수열이 되는 겁니다
    끝.
*/

var computePrevState = function (cell) {
    var start = ["00", "01", "10", "11"];
    var result = [];
    for (let s of start) {
        var prev = s;
        for (let c of cell.split("")) {
            prev += prev[prev.length - 2] ^ prev[prev.length - 1] ^ c;
        }
        if (prev.slice(0, 2) === prev.slice(-2)) {
            result.push(prev.slice(1, -1));
        }
    }

    return result.length === 1 ? result[0] :
           result.length === 0 ? "No" :
                                 "Multiple";
};

console.log(computePrevState("00011101"));  // === "01100101";
console.log(computePrevState("000"));       // === "Multiple";
console.log(computePrevState("000001"));    // === "No";
console.log(computePrevState("11110"));     // === "10010";
