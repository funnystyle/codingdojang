/*
Two Printers

출처 : http://www.codeabbey.com/index/task_view/two-printers

John과 Mary는 "J&M 출판사"를 설립하고 낡은 프린터 2대를 구입하였다.
그들이 첫번째로 성사시킨 거래는 N개의 페이지로 구성된 문서를 출력하는 일이었다.
그들이 구입한 두 대의 프린터는 각기 다른 속도록 문서를 출력하고 있다고 한다.
하나는 한 페이지를 출력하는 데 X초가 걸리고 다른 하나는 Y초가 소요된다고 한다.
John과 Mary는 두 대의 프린터를 이용하여 전체 문서를 출력하는 데 드는 최소한의 시간이 알고 싶어졌다.

입력과 출력

입력데이터의 첫번 째 라인은 테스트케이스의 갯수를 뜻하고 그 갯수만큼의 라인이 추가로 입력된다.
추가되는 각 라인은 세 개의 정수값 X Y N 으로 구성된다.

X는 첫번째 프린터가 한 페이지를 출력하는 데 드는 소요시간,
Y는 두번째 프린터가 한 페이지를 출력하는 데 드는 소요시간을 뜻하고
N은 출력할 문서의 총 페이지 수를 의미한다.
(단, 출력할 문서의 총 페이지 수는 1,000,000,000개를 초과하지 않는다.)

출력은 프린팅에 드는 최소한의 시간을 테스트케이스의 갯수만큼 공백으로 구분하여 출력하도록 한다.

입출력의 예는 다음과 같다:

input data:
2
1 1 5
3 5 4

answer:
3 9
*/

/*
한 페이지 출력시 각각 x, y초가 걸리는 프린터의
k초 후 인쇄 장수는 [k/x] + [k/y] 로 계산할 수 있다
([x] 는 가우스 기호로 x를 넘지 않는 최대 정수)

이 때 다음이 성립한다.
[k/x] + [k/y] <= k/x + k/y
(등호는 k 가 x, y 의 공배수일 때 성립)

다시 말해 k/x + k/y = n 을 만족시키는 k를 구해도
그 k 값으로는 [k/x] + [k/y] 이 n보다 작거나 같다는 것이다.
즉, 구하고자 하는 값은 k 이상이어야 한다.

그러므로 우선 k/x + k/y = n 을 성립시키는 k를 구한 후에
k 를 1씩 증가시키면서 [k/x] + [k/y] = n 이 되는 k를 구하면 된다.

k/x + k/y = n 식을 변형하면
k = nxy/(x+y) 가 되는데
이 때 만약 정수가 아니라면 올림을 한다
어차피 1 더해서 검사해봐야 하니까.
*/

var input =
`2
1 1 5
3 5 4`;

var lines = input.split("\n");
var size = parseInt(lines[0].trim());
var data = lines.slice(1).map(v => v.split(" ").map(v => parseInt(v.trim())));

var twoPrinters = function (d) {
    var [x, y, n] = d;

    var k = Math.ceil(n * x * y / (x + y));
    while (Math.floor(k / x) + Math.floor(k / y) < n) {
        k++;
    }
    
    return k;
};

var answer = Array.from(Array(size), (v, i) => twoPrinters(data[i]));

console.log(answer.join(" "));
