/*
Bubble Sort

출저 : http://www.codeabbey.com/index/task_view/bubble-sort

배열을 소팅하는 것은 초보 프로그래머에게 유명한 문제이며 전문적인 프로그래밍(데이터베이스, 라이브러리등)에서도 매우 중요하게 다루어 진다.

소팅은 비교에 기반을 두어 배열을 재 정렬하는 방법이다. 다음의 배열을 생각해 보자.

a = [3, 1, 4, 1, 5, 9, 2, 6]
우리는 이 배열을 크기 순서대로 정렬하고 싶다. (좌측의 요소는 우측의 요소보다 작거나 같아야 한다.)

수학적으로 표현하자면 다음과 같다.

i < j, a[i] <= a[j]
인덱스 i가 j보다 작은 경우 배열의 값인 a[i]는 a[j]값보다 작거나 같아야 한다.

버블소트(Bubble Sort)는 이러한 소팅을 하기 위한 가장 간단한 방법 중 하나이다. 그 간단한 방법은 다음과 같다:

배열을 따라가며 인접한 쌍을 찾는다. (N개의 배열이 있을 경우 N-1개의 쌍이 존재하게 된다)
만약 a[i] <= a[i+1] 을 만족하지 않는 쌍을 찾게 되면 두 개의 값을 서로 바꾸어준다. (Swap)
더 이상 바꾸어야 할 쌍이 존재하지 않을 때까지 1번, 2번을 반복한다. (Loop)
i와 j라는 인덱스를 가진 두 개의 값을 서로 바꾸기(Swap) 위해서는 몇가지 방법이 있는데 임시 변수를 사용하는 예는 다음과 같다:

t = a[i]
a[i] = a[j]
a[j] = t
입력과 출력

입력 데이터의 첫번째 라인은 배열의 갯수를 의미하며 두번째 라인은 배열의 요소값을 의미한다.

출력 데이터는 두개의 값으로 이루어진다.
첫번째 값은 배열을 따라 진행(Loop)한 횟수이며 두번째 값은 Swap이 발생한 총 횟수이다.

다음은 입출력 예제이다:

input data:
8
3 1 4 1 5 9 2 6

answer:
5 8
*/

var input =
`8
3 1 4 1 5 9 2 6`;

var lines = input.split("\n");
var size = parseInt(lines[0]);
var data = lines[1].split(" ").map(v => parseInt(v));

var loop = 0;
var swap = 0;
do {
    var swapped = false;
    for (let i = 0; i < size - 1; i++) {
        if (data[i] > data[i + 1]) {
            [data[i], data[i + 1], swap, swapped] = [data[i + 1], data[i], swap + 1, true];
        }
    }
    loop++;
} while (swapped);

console.log(`${loop} ${swap}`);
