/*
LCD Display

LCD Display

한 친구가 방금 새 컴퓨터를 샀다. 그 친구가 지금까지 샀던 가장 강력한 컴퓨터는 공학용 전자 계산기였다. 그런데 그 친구는 새 컴퓨터의 모니터보다 공학용 계산기에 있는 LCD 디스플레이가 더 좋다며 크게 실망하고 말았다. 그 친구를 만족시킬 수 있도록 숫자를 LCD 디스플레이 방식으로 출력하는 프로그램을 만들어보자.

입력

입력 파일은 여러 줄로 구성되며 표시될 각각의 숫자마다 한 줄씩 입력된다. 각 줄에는 s와 n이라는 두개의 정수가 들어있으며 n은 출력될 숫자( 0<= n <= 99,999,999 ), s는 숫자를 표시하는 크기( 1<= s < 10 )를 의미한다. 0 이 두 개 입력된 줄이 있으면 입력이 종료되며 그 줄은 처리되지 않는다.

출력

입력 파일에서 지정한 숫자를 수평 방향은 '-' 기호를, 수직 방향은 '|'를 이용해서 LCD 디스플레이 형태로 출력한다. 각 숫자는 정확하게 s+2개의 열, 2s+3개의 행으로 구성된다. 마지막 숫자를 포함한 모든 숫자를 이루는 공백을 스페이스로 채워야 한다. 두 개의 숫자 사이에는 정확하게 한 열의 공백이 있어야 한다.

각 숫자 다음에는 빈 줄을 한 줄 출력한다. 밑에 있는 출력 예에 각 숫자를 출력하는 방식이 나와있다.

예

입력 예

2 12345
3 67890
0 0
출력 예

      --   --        --
   |    |    | |  | |
   |    |    | |  | |
      --   --   --   --
   | |       |    |    |
   | |       |    |    |
      --   --        --

 ---   ---   ---   ---   ---
|         | |   | |   | |   |
|         | |   | |   | |   |
|         | |   | |   | |   |
 ---         ---   ---
|   |     | |   |     | |   |
|   |     | |   |     | |   |
|   |     | |   |     | |   |
 ---         ---   ---   ---
*/

var digit = [
    "1110111",
    "0010010",
    "1011101",
    "1011011",
    "0111010",
    "1101011",
    "1101111",
    "1110010",
    "1111111",
    "1111011",
];
var display = function (data) {
    let str = "";
    let j = 0;
    while (data && data[j] && data[j][0] !== "0") {
        var num = data[j][1].split("").map(v => parseInt(v));
        for (let i = 0; i < 7; i++) {
            for (d of num) {
                if (i === 0 || i === 3 || i === 6) {
                    str += " " + (digit[d][i] ? "-" : " ") + " " + (j < data.length - 1 ? " " : "");
                } else if (i === 1 || i === 4){
                    str += "|" + " ";
                } else { // 2, 5
                    str += " " + "|" + (j < data.length - 1 ? " " : "");
                }
            }
            if (i !== 1 && i !== 4) {
                console.log(str);
                str = "";
            }
        }
        j++;
    }
};

var input =
`2 12345
3 67890
0 0`;

var data = input.split("\n").map(v => v.split(" "));
display(data);



//---

line = ["1011011111", "3222311233", "0011111011", "3212223232", "1011011011"];

var input = "1234567890";

var str = "";
for (l of line) {
    for (i of input) {
        if (line.indexOf(l) % 2 === 0) {
            if (l[i] === "1") {
                str += " " + "-" + " ";
            } else {
                str += " " + " " + " ";
            }
        }

        if (line.indexOf(l) % 2 !== 0) {
            if (l[i] === "1") {
                str += "|" + " " + " ";
            } else if (l[i] === "2") {
                str += " " + " " + "|";
            } else {
                str += "|" + " " + "|";
            }
        }
        str += input.indexOf(i) === input.length - 1 ? "\n" : " ";
    }
    str += line.indexOf(l) === line.length - 1 ? "" : "\n";
}

console.log(str);

//-----

var line = ["1011011111", "3222311233", "0011111011", "3212223232", "1011011011"];
var token = [
    ["   ", " - "],
    ["   ", "|  ", "  |", "| |"]
];

var input = "1234567890";
var size = 2;
var result = [];

for (digit of input) {
    for (let i = 0; i < 5; i++) {
        var tokens = token[i % 2][line[i][digit]];
        result[i] = (result[i] || "") + tokens[0] + tokens[1].repeat(size) + tokens[2] + " ";
    }
}

// resize
result = result.map(function(v, i) {
    return i % 2 === 1 ? (v.slice(0, -1) + "\n").repeat(size).slice(0, -1) : v.slice(0, -1);
});

console.log(result.join("\n"));
