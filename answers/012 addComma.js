/*
숫자에 콤마 삽입하기

숫자 형태의 문자열을 콤마가 포함된 금액 표기식 문자열로 바꾸어주는 프로그램을 작성하시오.

※ 단, 프로그래밍 언어에서 지원하는 금액변환 라이브러리는 사용하지 말것

예)

숫자	금액
1000	1,000
20000000	20,000,000
-3245.24	-3,245.24

*/

var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);



Number.prototype.addComma = function() {
	var num = '' + this;
	var reg = /^([+-]?\d+)(\d{3})/g;
	while(reg.test(num)) {
		num = num.replace(reg, "$1,$2");
	}
	return num;
};

console.log((1000).addComma());
console.log((20000000).addComma());
console.log((-3245.24).addComma());


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

Number.prototype.addComma = function() {
	return ('' + this).replace(/\B(?=(?=\d*\.)(\d{3})+(?!\d))/g, ',')
};

Number.prototype.addComma = function() {
	num = ('' + this).split(".");
	num[0] = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return num.join(".");
};

console.log((1000).addComma());
console.log((20000000).addComma());
console.log((-3245.24).addComma());
console.log((-3245.2454545).addComma());

function formatNumber (num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1$2,");
}

console.log(formatNumber(2665));      // 2,665
console.log(formatNumber(102665));    // 102,665
console.log(formatNumber(111102665)); // 111,102,665
console.log(formatNumber(-3245.2454545)); // 111,102,665
