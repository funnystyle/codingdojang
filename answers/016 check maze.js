/*
미로 통과 검사
타워 디펜스 게임에서는 사용자가 장애물을 배치해 미로를 생성하여 적의 이동을 방해할 수 있다. 그런데 장애물을 배치할 때 길을 막아버리면 적이 목적지에 도달하는 것이 불가능하게 되어 정상적인 게임 진행이 되지 않는다. 따라서 많은 타워디펜스 게임은 사용자가 미로를 만들 수 있게 하되, 목적지를 향한 길을 막는 것 자체는 허용하지 않고 있다. 이를 위해 사용자가 만든 미로가 통과 가능한지 아닌지를 알아내는 루틴을 만들고자 한다.

입력된 미로가 통과 가능한지 검사하는 프로그램을 아래 조건에 따라 작성하시오.

미로는 1행 이상의 문자열로 입력된다.
미로는 2차원 공간이며, 입력되는 문자열의 각 문자는 미로의 칸을 나타낸다.
각 문자는 다음을 의미한다.
# 통과 불가능
(공백) 통과 가능
< 시작 지점
> 목적 지점
미로의 외벽은 막혀있다.
한 위치에서 다른 위치로의 이동은 상하좌우로만 가능하며, 대각선 이동은 불가능하다.
미로가 통과 가능하면 true를, 통과 불가능하면 false를 출력한다.
통과 가능한 미로의 예

1)

<     >
2)

########
#<     #
#  ##  #
#  ##  #
#     >#
########
3)

#######
#<    #
##### #
#     #
# #####
# #   #
# # # #
#   #>#
#######
통과 불가능한 미로의 예

4)

<   #   >
5)

########
#<     #
#     ##
#    #>#
########
6)

#< #  #
#  #  #
#  # >#
*/

var maze1 =
`<     >`;

var maze2 =
`########
#<     #
#  ##  #
#  ##  #
#     >#
########`;

var maze3 =
`#######
#<    #
##### #
#     #
# #####
# #   #
# # # #
#   #>#
#######`;

var maze4 =
`<   #   >`;

var maze5 =
`########
#<     #
#     ##
#    #>#
########`;

var maze6 =
`#< #  #
#  #  #
#  # >#`;

var check = function(maze) {
    var map = maze.split("\n").map($ => $.split(""));
    var flatmap = map.reduce((a, b) => a.concat(b), []);

    var [row, col] = [map.length, map[0].length];
    var [startrow, startcol] = [parseInt(flatmap.indexOf("<") / col), flatmap.indexOf("<") % col];

    var queue = [];
    var visited = Array.from(Array(row), v => Array.from(Array(col), () => 0));

    enqueue(queue, [startrow, startcol], map, visited);

    while (queue.length > 0) {
        let [row, col] = queue.shift();
        if (map[row][col] === ">") return true;

        enqueue(queue, [row - 1, col], map, visited);
        enqueue(queue, [row + 1, col], map, visited);
        enqueue(queue, [row, col + 1], map, visited);
        enqueue(queue, [row, col - 1], map, visited);
    }
    return false;
};

var enqueue = function(queue, [row, col], map, visited) {
    if (map[row] && map[row][col] && map[row][col] !== "#" && visited[row][col] !== 1) {
        queue.push([row, col]);
        visited[row][col] = 1;
    }
};

console.log(check(maze1));
console.log(check(maze2));
console.log(check(maze3));

console.log(check(maze4));
console.log(check(maze5));
console.log(check(maze6));
