/*
Spiral Array

문제는 다음과 같다:

6 6

  0   1   2   3   4   5
 19  20  21  22  23   6
 18  31  32  33  24   7
 17  30  35  34  25   8
 16  29  28  27  26   9
 15  14  13  12  11  10
위처럼 6 6이라는 입력을 주면 6 X 6 매트릭스에 나선형 회전을 한 값을 출력해야 한다.
*/

var initarray = function(rowsize = 6, colsize = 6) {
    return Array.from(Array(rowsize), (v, k) => Array.from(Array(colsize), () => -1));
};

Array.prototype.getRowCol = function() {
    return {row : this.length, col : this[0].length};
};

Array.prototype.printMatrix = function() {
    var {row, col} = this.getRowCol();
    var maxlength = ("" + (row * col)).length;

    var getspace = function(len, maxlen) {
        return new Array(maxlen - len + 2).join(" ");
    };

    var str = "";
    for (let line of this) {
        for (let value of line) {
            str += getspace(("" + value).length, maxlength) + value;
        }
        str += "\n";
    }
    console.log(str);
};

Array.prototype.makeSpiral = function() {
    var {row, col} = this.getRowCol();
    var [x, y, dx, dy] = [0, 0, 0, 1];

    for (let i = 0; i < row * col; i++) {
        this[x][y] = i;
        [x, y] = [x + dx, y + dy];

        if (!this[x] || !this[x][y] || this[x][y] !== -1 ) {
            [x, y] = [x - dx, y - dy];
            [dx, dy] = [dy, -dx];
            [x, y] = [x + dx, y + dy];
        }
    }
    return this;
};

initarray(6, 6).makeSpiral().printMatrix();
