/*
CamelCase를 Pothole_case 로 바꾸기!

파이썬과 같은 몇몇 프로그래밍 언어는 Pothole_case 를 더 선호하는 언어라고 합니다.

Example:

codingDojang --> coding_dojang

numGoat30 --> num_goat_3_0

위 보기와 같이 CameleCase를 Pothole_case 로 바꾸는 함수를 만들어요!

출처: UT past test
*/

/*
codingDojang --> coding_dojang

numGoat30 --> num_goat_3_0
*/

// regular expression 이용
// 첫 글자가 대문자인 경우 소문자로는 바꿔주나 _는 앞에 붙이지 말아야 한다.
// 따라서 첫 글자 처리는 따로 함
var pothole_case = function(camel) {
    return (camel[0] || "").toLowerCase() + camel.slice(1).replace(/([A-Z0-9])/g, (s => `_${s.toLowerCase()}`));
};

console.log(pothole_case("codingDojang"));
console.log(pothole_case("CodingDojang"));
console.log(pothole_case("numGoat30"));
console.log(pothole_case(""));


// reduce 이용
var pothole_case = function(camel) {
    return camel.split("").reduce((a, b) => a + b.replace(/([A-Z0-9])/g, (s => `_${s.toLowerCase()}`)), "");
};

console.log(pothole_case("codingDojang"));
console.log(pothole_case("CodingDojang"));
console.log(pothole_case("numGoat30"));
console.log(pothole_case(""));
