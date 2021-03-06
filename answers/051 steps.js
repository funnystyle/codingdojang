/*
Steps

수직선 위에서 정수 x에서 정수 y로 이동하는 과정을 생각해보자. 각 단계의 길이는 음이 아니어야 하며 이전 단계의 길이보다 1이 작거나, 같거나, 1이 커야 한다.

x에서 y로 가는 데 필요한 최소 단계의 수는 얼마인가? 첫번째와 마지막 단계의 길이는 모두 1이어야 한다.

Input

첫번째 줄에는 테스트 케이스의 개수인 n이 입력된다. 한 줄에 하나씩의 테스트 케이스가 입력되며, 각 줄마다 두 개의 정수 x, y가 입력된다. 0 ≤ x ≤ y < 231 이다.

Output

각 테스트 케이스에 대해 x 에서 y로 이동할 수 있는 최소 단계 수를 한 줄에 하나씩 출력한다.

Sample Input

3
45 48
45 49
45 50
Sample Output

3
3
4
*/

var steps = function(start, end, length, step) {
    length = length || 1;
    step = step || 0;

    if (end - start <= 1) return step;
    else return;
};
