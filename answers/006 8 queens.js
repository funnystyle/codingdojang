/*
Eight Queens Problem

유명한 프로그래밍 퀴즈.

8-queens 문제는 Queen이 다른 Queen를 공격할 수 없는 8 X 8개의 체스 판에서 8개의 Queen을 체스판 위에 놓이게하는 문제이다. 체스 판에서 Queen은 똑같은 행렬(가로와 세로)/대각선방향에 대해서 공격이 가능하다. 그러므로 이 문제에 대한 solution은 자기 자신(Queen)을 보호하면서 새로운 위치에 Queen을 놓게 하는 것이다.

각 열에는 오직 하나의 퀸만 존재해야 한다.
각 행에는 오직 하나의 퀸만 존재해야 한다.
각각의 퀸의 대각선에 다른 퀸이 존재해서는 안 된다.
예를들어 다음과 같이 퀸을 위치할 수 있다.



8 x 8 체스판에 8개의 Queen을 놓을 수 있는 방법은 모두 몇 가지인가?
*/

var chess = Array.from(Array(8), () => Array.from(Array(8), () => 0));

var place = function (chess, row, col) {
    if (chess[row][col] === 1) return false;
    chess = chess.map((line, r) => line.map((cell, c) => (r === row || c === col || Math.abs(r - row) === Math.abs(c - col)) && "1" || "0"));
    chess[row][col] = "Q";
    return chess;
};

var draw = function(chess) {
    console.log(chess.map(v => v.join(" ")).join("\n"));
};
