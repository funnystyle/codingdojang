/*
다음 디브온 코드골프 문제

출처: http://agile.egloos.com/5774107

디브온에서 미니대안언어축제가 진행되던 M2 밖에 텍스트큐브 부스에서 재미있는 코드골프 문제 풀기가 있었습니다. 150자 이하로 푸신 분들에게는 즉석에서 제공되는 원두커피와 텀블러가 상으로 주어졌다고 합니다.

문제는 아래와 같습니다. 이 결과가 나와야 하는데 언어 제약은 없답니다.

     *
     *
    * *
   *   *
  *     *
**       **
  *     *
   *   *
    * *
     *
     *
*/

//133 bytes
console.log([65,65,133,273,577,3587,577,273,133,65,65].map(v=>v.toString(2).slice(1).replace(/0/g," ").replace(/1/g,"*")).join("\n"))

//그냥 찍는 것이 더 짧다는...
//118 bytes
console.log("     *\n     *\n    * *\n   *   *\n  *     *\n**       **\n  *     *\n   *   *\n    * *\n     *\n     *");

//좀더 고민해보고 더 줄였습니다.
//91 bytes
console.log("5\n5\n41\n33\n25\n0070\n25\n33\n41\n5\n5".replace(/\d/g,$=>" ".repeat($)+"*"))

//----
// *
// *
// * *
// *   *
// *     *
// **       **
// *     *
// *   *
// * *
// *
// *

"5\n5\n41\n33\n25\n0070\n25\n33\n41\n5\n5".replace(/(d)/g,`${" ".repeat($1)+"*"}`);
console.log("5\n5\n41\n33\n25\n0070\n25\n33\n41\n5\n5".replace(/(\d)/g,(_,$)=>" ".repeat($)+"*"))

console.log("5\n5\n41\n33\n25\n0070\n25\n33\n41\n5\n5".replace(/(\d)/g,(_,$)=>" ".repeat($)+"*"))

console.log("5*5*41*33*25*0070*25*33*41*5*5*".replace(/(\d)/g,(_,$)=>"\n"+" ".repeat($)));


console.log("5\n5\n41\n33\n25\n0070\n25\n33\n41\n5\n5".replace(/(\d)/g,":$':"))

console.log("5\n5\n41\n33\n25\n0070\n25\n33\n41\n5\n5".replace(/\d/g,$=>" ".repeat($)+"*"))



console.log("5.5.41.33.25.0070.25.33.41.5.5".replace(/\d/g,$=>" ".repeat($)+"*").split(".").join("\n"))

// 133 bytes

console.log([65,65,133,273,577,3587,577,273,133,65,65].map(v=>v.toString(2).slice(1).replace(/0/g," ").replace(/1/g,"*")).join("\n"))

// 118 bytes

console.log("     *\n     *\n    * *\n   *   *\n  *     *\n**       **\n  *     *\n   *   *\n    * *\n     *\n     *")

// 91 bytes

console.log("5\n5\n41\n33\n25\n0070\n25\n33\n41\n5\n5".replace(/\d/g,$=>" ".repeat($)+"*"))

// 85 bytes
alert("5\n5\n41\n33\n25\n0070\n25\n33\n41\n5\n5".replace(/\d/g,$=>" ".repeat($)+"*"))



// 5\n5\n41\n33\n25\n0070\n25\n33\n41\n5\n5
