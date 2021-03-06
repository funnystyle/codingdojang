/*
Insertion Sort

5 2 4 6 1 3
2 5 4 6 1 3
2 4 5 6 1 3
2 4 5 6 1 3
1 2 4 5 6 3
1 2 3 4 5 6

위 그림은 {5,2,4,6,1,3} 이라는 배열을 소트하는 방법을 보여준다.

배열의 두번째 인덱스부터 시작하여 시작한 인덱스(검정색 블록) 좌측의 항목 중 자신이 들어가야 할 위치를 판단(소트되도록)하여 이동 한다.
좌측의 배열 요소들은 본인보다 좌측에 값이 삽입되어 들어올 경우 한칸씩 우측으로 이동한다.
단, 삽입되어 들어오는 요소(그림에서 검정색 블록)가 있던 인덱스(원래의 위치)까지만 이동한다.
마지막 인덱스까지 위 과정을 반복한다.

이와 같은 기능을 하는 소트 프로그램을 작성하시오.
*/
var array = [5,2,4,6,1,3];

console.log(`step 0 : ${array.join(" ")}`);

for (let i = 1; i < array.length; i++) {
    var c = 0;
    while (array[i] > array[c]) c++;
    for (let j = c; j < i; j++) {
        var temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
    console.log(`step ${i} : ${array.join(" ")}`);
}
