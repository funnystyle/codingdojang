/*
간단한 몬테카를로 방법(Montecarlo Method) 예시

몬테카를로 방법은 과학과 공학 전 영역에 걸쳐 널리 사용되는 방법이다.
확률적인 해석을 요구하는 문제를 풀고싶을 때, 이 방법이 주로 쓰인다.
역사적으로는 물리학에서 자주 사용되었다고 전해진다.
1940년도에 원자로의 연쇄 반응 제어를 최초로 실현한 물리학자 엔리코 페르미는
중성자 확산(Neutron Diffusion)을 연구하면서, 이 방법을 자주 사용하였고,
로스앨러모스에서 맨하탄 프로젝트가 수행될 때 현대적인 버전의 몬테카를로 방법이 개발되었다고 전해진다.

참고 Montecarlo

몬테카를로 방법의 가장 간단한 예시로는 원주율(π)의 값을 추정하는 것이다.

넓이가 1인 정사각형을 생각하자.
정사각형의 한 꼭지점을 중심으로 반지름이 1인 사분원을 정사각형 안에 그린다.
그러면 사분원이 차지하는 넓이는 π/4가 될 것이다. 이제, 0 <= x <= 1인 x를 임의로 가져오고,
독립적으로 0 <= y <= 1인 y를 임의로 가져온 후,
x^2 + y^2 <= 1일 확률은 사분원이 차지하는 넓이와 같은 값인 π/4가 된다.

이 과정을 여러 번 수행하는 알고리즘을 작성하고, 원주율의 값을 추정하시오.
*/

var distance = (x, y) => Math.sqrt(x * x + y * y);

var guessPI = function(r) {
    return Array.from(Array(r)).reduce(v => v + (distance(Math.random(), Math.random()) <= 1 ? 1 : 0), 0) / r * 4;
};

var repeat = [3000, 4000, 5000, 6500, 8500, 10000, 15000, 18000, 24000, 30000, 300000, 999999];
for (let r of repeat) {
    console.log(`${r} : ${guessPI(r)}`);
}


var guessPI = function (repeat) {
    var inner = 0;
    for (let i = 0; i < repeat; i++) {
        if (distance(Math.random(), Math.random()) <= 1) inner++;
    }

    return inner / repeat * 4;
};
