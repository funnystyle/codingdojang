/*
Subdate

두 날짜(YYYYMMDD)의 차이 일수를 구하는 프로그램을 작성하시오.

※ 단, 프로그래밍 언어에서 지원하는 날짜차이를 계산하는 라이브러리는 사용하지 말것

예)

20070515 sub 20070501 = 14
20070501 sub 20070515 = 14
20070301 sub 20070515 = 75
*/

var daysOfYear 			= 365;
var daysOfLeapYear 		= 366;
var daysOfMonth 		= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var daysOfMonthOfLeap 	= [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var isLeapYear = y => (y % 4 == 0 && y % 100 !== 0) || y % 400 == 0;
var add = (a, b) => a + b;

var parseDate = function(s) {
	var [, year, month, day] = /^(\d{4})(\d{2})(\d{2})$/g.exec(s).map(v => parseInt(v));
	return [year, month, day];
};

var getDaysOfMonth = function(y, m) {
	var d = 0;

	for (let i = 0; i < m; i++) {
		d += isLeapYear(y) ? daysOfMonthOfLeap[i] : daysOfMonth[i];
	}

	return d;
};

var getDaysOfDiffYear = function(y1, y2) {
	var d = 0;

	for (let i = y1; i < y2; i++) {
		d += isLeapYear(i) ? daysOfLeapYear : daysOfYear;
	}

	return d;
};

var subdate = function(s1, s2) {
	var s 						= [s1, s2].sort(),
		[year1, month1, day1] 	= parseDate(s[0]),
		[year2, month2, day2] 	= parseDate(s[1]),
		days1 					= day1 + getDaysOfMonth(year1, month1);
		days2 					= day2 + getDaysOfMonth(year2, month2) + getDaysOfDiffYear(year1, year2);
	console.log(s[0], ":", s[1]);
	console.log(days2 - days1);
};




subdate(20060515, 20070501); // 14
subdate(20070501, 20170515); // 14
subdate(20070301, 20070515); // 75



//--

var daysOfYear  = [365, 366];
var daysOfMonth = [
	[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
	[31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
];

var isLeapYear = y => (y % 4 == 0 && y % 100 !== 0) || y % 400 == 0;
var add = (a, b) => a + b;

var parseDate = function(s) {
	var [, year, month, day] = /^(\d{4})(\d{2})(\d{2})$/g.exec(s).map(v => parseInt(v));
	return [year, month, day];
};

var getDaysOfMonth = function(y, m) {
	return daysOfMonth[~~isLeapYear(y)].filter((v, i) => i < m).reduce(add);
};

var getDaysBetweenYears = function(y1, y2) {
	if (y1 === y2) return 0;
	return Array.from(Array(y2 - y1), (v, i) => i + y1).map(v => daysOfYear[~~isLeapYear(v)]).reduce(add);
};

var subdate = function(s1, s2) {
	var s 						= [s1, s2].sort(),
		[year1, month1, day1] 	= parseDate(s[0]),
		[year2, month2, day2] 	= parseDate(s[1]),
		days1 					= day1 + getDaysOfMonth(year1, month1);
		days2 					= day2 + getDaysOfMonth(year2, month2) + getDaysBetweenYears(year1, year2);

	console.log(days2 - days1);
};

subdate(20070515, 20070501); // 14
subdate(20070501, 20070515); // 14
subdate(20070301, 20070515); // 75
