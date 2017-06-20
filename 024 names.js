/*
주어진 문자열(공백 없이 쉼표로 구분되어 있음)을 가지고 아래 문제에 대한 프로그램을 작성하세요.

이유덕,이재영,권종표,이재영,박민호,강상희,이재영,김지완,최승혁,이성연,박영서,박민호,전경헌,송정환,김재성,이유덕,전경헌
김씨와 이씨는 각각 몇 명 인가요?
"이재영"이란 이름이 몇 번 반복되나요?
중복을 제거한 이름을 출력하세요.
중복을 제거한 이름을 오름차순으로 정렬하여 출력하세요.
*/

var Names = function(str) {
	this.array = str.split(",");
};

Names.prototype.countByLastname = function(str) {
	return this.array.map(v => v.startsWith(str) ? 1 : 0).reduce((a, b) => a + b, 0);
};

Names.prototype.countByName = function(str) {
	return this.array.map(v => v === str ? 1 : 0).reduce((a, b) => a + b, 0);
};

Names.prototype.getNames = function(opt) {
	var array = Array.from(new Set(this.array));
	return opt && opt.sort ? array.sort().join(",") : array.join(",");
};

var input = "이유덕,이재영,권종표,이재영,박민호,강상희,이재영,김지완,최승혁,이성연,박영서,박민호,전경헌,송정환,김재성,이유덕,전경헌";
var names = new Names(input);

console.log(names.countByLastname("김"));
console.log(names.countByLastname("이"));
console.log(names.countByName("이재영"));

console.log(names.getNames());
console.log(names.getNames({sort : true}));


// countByLastname 과 countByName 을 합쳐봤습니다.
var Names = function(str) {
	this.array = str.split(",");
};

Names.prototype.compare = {
	"lastname" : (v, str) => v.startsWith(str),
	"name" : (v, str) => v === str
};

Names.prototype.countBy = function(opt, str) {
	return this.array.map(v => this.compare[opt](v, str) ? 1 : 0).reduce((a, b) => a + b, 0);
};

var input = "이유덕,이재영,권종표,이재영,박민호,강상희,이재영,김지완,최승혁,이성연,박영서,박민호,전경헌,송정환,김재성,이유덕,전경헌";
var names = new Names(input);

console.log(names.countBy("lastname", "김"));
console.log(names.countBy("lastname", "이"));
console.log(names.countBy("name", "이재영"));
