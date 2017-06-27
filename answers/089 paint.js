/*
그림판

당신은 그림판의 '색 채우기' 기능을 구현하려한다.

이미지 크기는 제한이 없다. (처리속도 < 3s)

입력 설명

가로 세로
색을 채우기 시작할 점 과 색
이미지의 색상 데이터
입력 예시

10 10
5 5 3
0000000000
0000001000
0000110100
0011000010
0100000010
0100000010
0100000100
0010001000
0001011000
0000100000
출력 예시

0000000000
0000001000
0000113100
0011333310
0133333310
0133333310
0133333100
0013331000
0001331000
0000100000
*/


var paint = function(canvas, x, y, c) {
    var queue = [];
    var visited = Array.from(Array(canvas.length), v => Array.from(Array(canvas[0].length), () => 0));

    enqueue(queue, [x, y, c], canvas, visited);

    while (queue.length > 0) {
        var [row, col, color] = queue.shift();
        canvas[row][col] = color;

        enqueue(queue, [row - 1, col, c], canvas, visited);
        enqueue(queue, [row + 1, col, c], canvas, visited);
        enqueue(queue, [row, col + 1, c], canvas, visited);
        enqueue(queue, [row, col - 1, c], canvas, visited);
    }
};

var enqueue = function(queue, [row, col, color], canvas, visited) {
    if (canvas[row] && canvas[row][col] === 0 && visited[row][col] !== 1) {
        queue.push([row, col, color]);
        visited[row][col] = 1;
    }
};

var print = function(canvas) {
    console.log(canvas.map(v => v.join("")).join("\n"));
};

var input=
`10 10
5 5 3
0000000000
0000001000
0000110100
0011000010
0100000010
0100000010
0100000100
0010001000
0001011000
0000100000`;

var lines = input.split("\n");
var [m, n] = lines[0].split(" ");
var [x0, y0, c0] = lines[1].split(" ").map(v => parseInt(v));
var map = lines.slice(2).map(v => v.split("").map(v => parseInt(v)));

paint(map, x0, y0, c0);
print(map);
