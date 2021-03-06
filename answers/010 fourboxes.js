/*
Four Boxes

4개의 직사각형이 평면에 있는데 밑변이 모두 가로축에 평행하다. 이 직사각형들이 차지하는 면적을 구하는 프로그램을 작성하시오. 이 네 개의 직사각형들은 서로 떨어져 있을 수도 있고 겹쳐 있을 수도 있다. 또한 하나가 다른 하나를 포함할 수도 있으며, 변이나 꼭지점이 겹쳐질 수도 있다.

입력형식

하나의 직사각형은 왼쪽 아래의 꼭지점과 오른쪽 위의 꼭지점의 좌표로 주어진다. 입력은 네 줄이며, 각 줄은 네 개의 정수로 하나의 직사각형을 나타낸다. 첫 번째와 두 번째의 정수는 사각형의 왼쪽 아래 꼭지점의 x좌표, y좌표이고, 세 번째와 네 번째의 정수는 사각형의 오른쪽 위 꼭지점의 x좌표, y좌표이다. 단, x좌표와 y좌표는 1 이상이고 1000 이하인 정수이다.

출력형식

화면에 4개의 직사각형이 차지하는 면적을 출력한다.

입력예제

1 2 4 4
2 3 5 7
3 1 6 5
7 3 8 6
출력예제

26
*/

//var coordinates = Array.from(Array(1000), () => Array.from(Array(1000), () => 0));

var getPoint = function(line) {
	var [, x1, y1, x2, y2] = /^(\d)\s(\d)\s(\d)\s(\d)$/g.exec(line);
	return {
		"x1" : x1,
		"y1" : y1,
		"x2" : x2,
		"y2" : y2
	};
};

var getArea = function(input) {
	var inputs = input.split("\n").map(v => v.trim());
	var coordinates = [];

	for (let line of inputs) {
		var p = getPoint(line);

		for (let x = p.x1; x < p.x2; x++) {
			for (let y = p.y1; y < p.y2; y++) {
				if (!coordinates[x]) coordinates[x] = [];
				coordinates[x][y] = 1;
			}
		}
	}

	return coordinates.reduce((a,b) => a.concat(b))
     	 	   		  .reduce((a,b) => a + b);
};

var input =
`1 2 4 4
2 3 5 7
3 1 6 5
7 3 8 6`;

console.log(getArea(input));





var getArea = function(input) {
	var inputs = input.split("\n").map(v => v.trim());
	var coordinates = [];

	for (let line of inputs) {
		var p = getPoint(line);

		for (let x = p.x1; x < p.x2; x++) {
			for (let y = p.y1; y < p.y2; y++) {
				if (!coordinates[x]) coordinates[x] = [];
				coordinates[x][y] = 1;
			}
		}
	}

	return coordinates.reduce((a,b) => a.concat(b))
     	 	   		  .reduce((a,b) => a + b);
};
