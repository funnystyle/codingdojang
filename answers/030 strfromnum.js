/*
숫자로 만드는 문자열

출처: http://www.careercup.com/question?id=19300678

페이스북 면접 문제

알파벳을 다음과 같이 숫자에 매핑했을 때,

a=1, b=2, c=3,....z=26
숫자로 만들어 질 수 있는 모든 문자열을 찾으시오.

예:

입력:
1123

출력:
aabc // a = 1, a = 1, b = 2, c = 3
kbc  // k는 11 이므로, b = 2, c= 3
alc  // a = 1, l = 12, c = 3
aaw  // a= 1, a =1, w= 23
kw   // k = 11, w = 23
*/

/*
중간에 0이 있거나 26보다 큰 수가 있을 때는 skip 하도록 처리했습니다.
그렇게 처리하고 보니 같은 문자열이 여러개 나오는 경우가 있어서
결과리스트 자료구조를 Set 으로 하였습니다.
*/

var strFromNum = function(n) {
	var input = ("" + n);
	var result = new Set();
	var alphabet = "abcdefghijklmnopqrstuvwxyz";

	var itoa = function itoa(i, a) {
		if (i === "") {
			result.add(a);
			return;
		}

		var index = 0;

		index = parseInt(i.substr(0, 1));
		itoa(i.substr(1), a + (alphabet[index - 1] || ""));

		index = parseInt(i.substr(0, 2));
		if (i.length >= 2) {
			itoa(i.substr(2), a + (alphabet[index - 1] || ""));
		}
	}

	itoa(input, "");

	return Array.from(result);
}

console.log(strFromNum(1123).join("\n"));
console.log(strFromNum(10001).join("\n"));
console.log(strFromNum(12345).join("\n"));
