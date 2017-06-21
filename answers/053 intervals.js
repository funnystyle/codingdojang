/*
Intervals

출처 : http://poj.org/problem?id=1089

문제 설명

n개의 닫힌 구간 [ai; bi]의 순열이 있습니다(i=1,2, ..., n). 이들 구간을 합쳐서 서로 겹치지 않는 닫힌 구간들의 합으로 나타낼 수 있습니다. 문제는 구간의 수를 최소로 하는 표현방법을 찾아내는 것입니다. 이 표현의 구간들은 출력 파일에서 반드시 증가하는 방향으로 나타나야 합니다. a <= b < c <= d 이고 또 그런 경우에만 구간 [a; b]와 [c; d]가 증가하는 방향이라고 말합니다.

입력

입력의 첫 줄에는 정수 n이 있습니다. (3 <= n <= 50000). 이것은 구간의 수를 나타냅니다. (i+1)번째 줄에는 한 개의 공백으로 구분되는 두 개의 정수 ai, bi가 있습니다. 이것은 구간 [ai; bi]를 나타내는 표현입니다. 각각은 그 구간의 시작과 끝을 나타냅니다. (1 <= ai <= bi <= 1000000)

출력

출력은 서로 겹치지 않는 모든 구간 쌍의 표현을 담고 있어야 합니다. 각 줄은 하나의 구간 표현을 담고 있어야 합니다. 이 표현은 각 구간의 시작과 끝을 나타내는 두 개의 정수와 그 사이의 공백 하나로 이뤄져야 합니다. 출력의 구간들은 증가하는 순서로 존재해야 합니다.

Sample Input

5
5 6
1 4
10 10
6 9
8 10
Sample Output

1 4
5 10
제약조건 : 시간 제한 1000ms, 메모리 제한 10000Kbytes
*/
var input =
`5
5 6
1 4
10 10
6 9
8 10`;

var lines = input.split("\n");
var size = parseInt(lines[0]);
var data = lines.slice(1).map(v => v.split(" ").map(v => parseInt(v)))
                .sort((a,b) => a[1] - b[1])
                .sort((a,b) => a[0] - b[0]);
var interval = [data[0] || [0, 0]];
for (let i = 1; i < size; i++) {
    if (interval[interval.length - 1][1] >= data[i][0]) {
        interval[interval.length - 1][1] = data[i][1];
    } else {
        interval.push(data[i]);
    }
}
console.log(interval.map(v => v.join(" ")).join("\n"));

[[1,10],[10, 5],[1, 3],[1, 4], [2, 10]].sort((a,b) => a[1] - b[1]).sort((a,b) => a[0] - b[0])
