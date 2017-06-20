/*
앞뒤가 같은 수

문제

앞뒤가 같은 수는 바로 쓴 값과 거꾸로 쓴 값이 같은 수이다. 다음과 같은 예를 들 수 있다.

1
44
101
2002
8972798
1111111111111
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111, ... 과 같이, 0 이상의 앞뒤가 같은 수를 크기 순으로 나열할 때, n 번째 수를 계산하는 프로그램을 작성하라.

n은 1부터 시작하며 크기에는 제한이 없다.

입출력예

예 1) 1 => 0
예 2) 4 => 3
예 3) 30 => 202
예 4) 100 => 909
예 5) 30000 => 200000002
예 6) 1000000 => 90000000009
*/

/*
먼저 각 자리수에 대한 팔린드롬의 수를 알아내는 function 을 만들었습니다.
입력값을 넘지 않는 최대수를 sum 하고난 후
sum 이 입력값과 같다면
해당 자리수의 마지막 수(0, 9, 99, 999, ...)이므로 계산해서 리턴
sum 이 입력값보다 작다면
그 다음 자리수의 반을 잘라(물론 홀수면 [n/2]+1이겠죠) 10 부터 남은 개수만큼 계산하고서
자리수가 짝수면 뒤집어 붙여주고
자리수가 홀수면 마지막자리수를 없애고 뒤집어 붙입니다.
속도는 빠르네요. 입력값이 아닌 자리수에 대해 O(n) 이에요.
cache 를 사용하면 더 빨라질 것 같은데 그냥 pass
*/

var countByDigit = n => Math.ceil(9 * Math.pow(10, Math.ceil(n / 2) - 1));

var palindrome = function(n)  {
    let i, sum = 0;

    for (i = 0; sum <= n; i++) {
        sum += countByDigit(i);
    }
    sum -= countByDigit(i - 1);

    var remain = n - sum;
    if (remain === 0) {
        var pal = Math.pow(10, i - 2) -1;
        return pal;
    }

    var digit = Math.ceil(i / 2);
    var start = Math.pow(10, digit - 1);
    var end = start + remain - 1;
    var offset = (i - 1) % 2;
    var reverse = ("" + end).split("").reverse().slice(offset).join("");
    var pal = "" + end + reverse;
    return pal;
};

console.log(palindrome(1));
console.log(palindrome(4));
console.log(palindrome(30));
console.log(palindrome(100));
console.log(palindrome(30000));
console.log(palindrome(1000000));
