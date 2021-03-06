/*
Printing OXs

(앞의 문제들 중 비슷한 알고리즘이 있던 것 같지만, 같은 건 없다고 생각해서 올립니다.)

input은 int n을 입력 받아 첫번째 row는 (n-1)의 O와 X, 두번째 row는 (n-2)의 O와 XX, 세번째 row는 (n-3)의 0와 XXX... n번째 row는 n의 X을 출력하시오.

입력 예시: 6

출력 예시:

OOOOOX
OOOOXX
OOOXXX
OOXXXX
OXXXXX
XXXXXX
*/

(n=>console.log(Array.from(Array(n),(_,i)=>"O".repeat(n-i-1)+"X".repeat(i+1)).join("\n")))(6);

//--

var printox = function(n) {
    var s = "";
	for(let i = n - 1; i >= 0; i--) {
        s += "O".repeat(i) + "X".repeat(n - i) + "\n";
    }
    console.log(s);
};

printox(6);

var printox = n => console.log(Array.from(Array(n), (_, i) => "O".repeat(n - i - 1) + "X".repeat(i + 1)).join("\n"));
printox(6);

(n=>console.log(Array.from(Array(n),(_,i)=>"O".repeat(n-i-1)+"X".repeat(i+1)).join("\n")))(6);
