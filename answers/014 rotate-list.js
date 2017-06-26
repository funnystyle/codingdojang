/*
리스트 회전

아래 조건에 따라 리스트를 회전하는 프로그램을 작성하시오.

조건

입력값은 한 행의 문자열로 주어지며, 각 값은 공백으로 구분된다.
첫 번째 값은 리스트를 회전하는 양과 방향(음수의 경우 좌측으로, 양수의 경우 우측으로 회전)이다.
첫 번째 값을 제외한 나머지 값은 리스트의 각 항목의 값이다.
회전된 리스트를 문자열로 출력한다.
구현에 이용할 자료구조에 대한 조건이나 제약은 없다.
입력되는 리스트의 항목의 개수는 유한한다.
입출력예

예 1)

입력: 1 10 20 30 40 50
출력: 50 10 20 30 40
예 2)

입력: 4 가 나 다 라 마 바 사
출력: 라 마 바 사 가 나 다
예 3)

입력: -2 A B C D E F G
출력: C D E F G A B
예 4)

입력: 0 똘기 떵이 호치 새초미
출력: 똘기 떵이 호치 새초미
*/

var rotateList = function(input) {
    var inputs = input.split(" ");
    var [index, array, length, offset] = [+inputs.slice(0, 1)[0],
                                          inputs.slice(1),
                                          inputs.length - 1,
                                          ((index % length) + length) % length];

    return array.slice(length - offset).concat(array.slice(0, length - offset));
};

console.log(rotateList("1 10 20 30 40 50").join(" "));
console.log(rotateList("4 가 나 다 라 마 바 사").join(" "));
console.log(rotateList("-2 A B C D E F G").join(" "));
console.log(rotateList("0 똘기 떵이 호치 새초미").join(" "));

//---

var plusMod = function(n, m) {
	return ((n % m) + m) % m;
};

var rotateList = function(input) {
	var array = input.split(" ");
	var index = +array.splice(0, 1)[0];
	console.log(index);
	console.log(array);
	var length = array.length;
	var offset = plusMod(index, length);
	var front = array.splice(length - offset, offset);
	console.log(front);
	console.log(array);
	front.concat(array);
	return front.join(" ");
};

console.log(rotateList("1 10 20 30 40 50"));
console.log(rotateList("4 가 나 다 라 마 바 사"));
console.log(rotateList("-2 A B C D E F G"));
console.log(rotateList("0 똘기 떵이 호치 새초미"));
