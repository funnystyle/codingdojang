/*
게시판 페이징

A씨는 게시판 프로그램을 작성하고 있다.

A씨는 게시물의 총 건수와 한 페이지에 보여줄 게시물수를 입력으로 주었을 때 총 페이지수를 리턴하는 프로그램이 필요하다고 한다.

입력 : 총건수(m), 한페이지에 보여줄 게시물수(n) (단 n은 1보다 크거나 같다. n >= 1)
출력 : 총페이지수
A씨가 필요한 프로그램을 작성하시오.

예) 프로그램 수행 시 다음과 같은 결과값이 나와야 함.

m	n	출력
0	1	0
1	1	1
2	1	2
1	10	1
10	10	1
11	10	2
*/

var totalpage = function(m, n) {
	return Math.ceil(m / n);
}

var totalpage = function(m, n) {
	return parseInt(m / n) + ~~(m % n);
}

console.log(totalpage(0, 1));
console.log(totalpage(1, 1));
console.log(totalpage(2, 1));
console.log(totalpage(1, 10));
console.log(totalpage(10, 10));
console.log(totalpage(11, 10));




function totalpage(m,n){
  var total_page = 0;

  total_page = parseInt(m / n);
  if(total_page > 0) total_page += 1;

  return total_page;
}



console.log(totalpage(0, 1));
console.log(totalpage(1, 1));
console.log(totalpage(2, 1));
console.log(totalpage(1, 10));
console.log(totalpage(10, 10));
console.log(totalpage(11, 10));
