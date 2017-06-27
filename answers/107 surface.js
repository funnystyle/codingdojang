/*
쌓여있는 상자들의 겉넓이.
n*n 크기의 바닥에 각 변의 길이가 1인 상자들을 바닥이 보이지 않게 쌓았을 때, 상자들의 겉넓이의 합은? (단, 바닥에는 길이 1마다 눈금이 그려져 있으며, 상자는 눈금에 맞추어 쌓는다.)

추가: 겉넓이에는 바닥을 포함합니다.

입력 예:
[
    [1,4,3,4],
    [2,3,4,1],
    [3,4,2,1],
    [9,3,2,1]
]

입력 예에서 각 숫자는 해당 칸에 쌓인 상자의 개수이다.

출력: 120
*/

var input = [
    [1, 4, 3, 4],
    [2, 3, 4, 1],
    [3, 4, 2, 1],
    [9, 3, 2, 1]
];

var surface = function(skyview) {
    var sum = 0;
    // 블럭을 위/아래에서 보았을 때는, 1 이상인 칸에 대하여 넓이 1
    sum += skyview.reduce((a, b) => a.concat(b), []).filter(v => v > 0).length * 2;

    // 블럭을 앞/뒤에서 보았을 때는, col의 max 값들을 더하면 된다
    sum += skyview.
    // 블럭을 좌/우에서 보았을 때는, row의 max 값들을 더하면 된다
    sum += skyview.map(v => Math.max(...v)).reduce((a, b) => a + b) * 2;
    return sum;
};

surface(input);

// test
var assertEqual = (a, b) => console.log(a === b);

assertEqual(surface(input), 120);
