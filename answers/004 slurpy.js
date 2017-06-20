/*
스러피(Slurpy)

스러피(Slurpy)란 어떠한 속성이 존재하는 문자열이다. 문자열을 읽어서 스러피가 존재하는지를 판단하는 프로그램을 작성해야 한다.

스럼프(Slump)는 다음 속성을 갖는 문자열이다.

첫 번째 문자가 'D' 또는 'E'이다.
첫 번째 문자 뒤에는 하나 이상의 'F'가 나온다.
하나 이상의 'F' 뒤에는 또 다른 스럼프나 'G'가 온다. 스럼프는 'F' 끝에 오는 스럼프나 'G'로끝난다. 예를 들어, DFFEFFFG는 첫 번째 문자가 'D'로 시작하고 두 개의 'F'가 나오며, 또 다른스럼프 'EFFFG'로 끝난다.
위의 경우가 아니면 스럼프가 아니다.
스림프(Slimp)는 다음 속성을 갖는 문자열이다.

첫 번째 문자는 'A'이다.
두 개의 문자로만 된 스림프면, 두 번째 문자는 'H'이다.
두 개의 문자로 된 스림프가 아니면 다음 형식 중의 하나가 된다.
'A' + 'B' + 스림프 + 'C'.
'A' + 스럼프 + 'C'.
위의 경우가 아니면 스림프가 아니다.
스러피(Slurpy)는 스림프(Slimp) 뒤에 스럼프(Slump)로 구성되는 문자열이다.

다음은 그 예이다.

Slumps : DFG, EFG, DFFFFFG, DFDFDFDFG, DFEFFFFFG
Not Slumps: DFEFF, EFAHG, DEFG, DG, EFFFFDG
Slimps: AH, ABAHC, ABABAHCC, ADFGC, ADFFFFGC, ABAEFGCC, ADFDFGC
Not Slimps: ABC, ABAH, DFGC, ABABAHC, SLIMP, ADGC
Slurpys: AHDFG, ADFGCDFFFFFG, ABAEFGCCDFEFFFFFG
Not Slurpys: AHDFGA, DFGAH, ABABCC
입력

입력될 문자열의 개수를 나타내는 정수 N 이 1 ~ 10의 범위로 우선 입력된다. 다음 줄부터 N개의 문자열이 입력된다. 문자열은 1 ~ 60 개의 알파벳 문자로 구성된다.

출력

첫 줄에는 "SLURPYS OUTPUT"을 출력한다. N 개의 문자열 입력에 대해서 각 문자열이 스러피인지를 "YES" 또는 "NO"로 표기한다. 마지막으로 "END OF OUTPUT"를 출력한다.

Sample Input

2
AHDFG
DFGAH
Sample Output

SLURPYS OUTPUT
YES
NO
END OF OUTPUT
*/

Slump
D/E  F* (Slump)/G

var input = "DFG";

var isSlump = function(s) {
	var m = null;
	do {
		m = /^[DE]F+(.*G)$/g.exec(s);
		if (m) {
			s = m[1];
			if (s === "G") return true;
		}
	} while (m);
	return false;
};

var isSlump = s => /([DE]F+)+G/g.exec(s) !== null;
var isSlump = s => !!/([DE]F+)+G/g.exec(s);

console.log("## TRUE");
console.log(isSlump("DFG"));
console.log(isSlump("EFG"));
console.log(isSlump("DFFFFFG"));
console.log(isSlump("DFDFDFDFG"));
console.log(isSlump("DFEFFFFFG"));

console.log("## FALSE");
console.log(isSlump("DFEFF"));
console.log(isSlump("EFAHG"));
console.log(isSlump("DEFG"));
console.log(isSlump("DG"));
console.log(isSlump("EFFFFDG"));

var isSlump = function(s) {
	return !!/^([DE]F+)+G$/g.exec(s);
};

var isSlimp = function (s) {
	var m = /^(AH)$|^A(B?(.*))C$/g.exec(s);
	if (m) {
		return !!m[1] || isSlump(m[2]) || isSlimp(m[3]);
	}
	return false;
};

console.log("## TRUE");
console.log(isSlimp("AH"));
console.log(isSlimp("ABAHC"));
console.log(isSlimp("ABABAHCC"));
console.log(isSlimp("ADFGC"));
console.log(isSlimp("ADFFFFGC"));
console.log(isSlimp("ABAEFGCC"));
console.log(isSlimp("ADFDFGC"));

console.log("## FALSE");
console.log(isSlimp("ABC"));
console.log(isSlimp("ABAH"));
console.log(isSlimp("DFGC"));
console.log(isSlimp("ABABAHC"));
console.log(isSlimp("SLIMP"));
console.log(isSlimp("ADGC"));

var isSlimp = function (s) {
	var m = /^(AH)$|^A(B?(.*))C$/g.exec(s);
	if (m) {
		return !!m[1] || isSlump(m[2]) || isSlimp(m[3]);
	}
	return false;
};

String.prototype.isSlump = function(s) {
	var m = /^([DE]F+)+G$/g.exec(s);
	return m !== null;
};

String.prototype.isSlimp = function (s) {
	var m = /^(?:AH|A(?:[DE]F+)+GC|AB(.+)C)$/g.exec(s);
	return m ? !m[1] || isSlimp(m[1]) : false;
};

String.prototype.isSlurpy = function(s) {
	var m = /^(?:AH|A(?:[DE]F+)+GC|AB(.+)C)(?:[DE]F+)+G$/g.exec(s);
	return m ? !m[1] || isSlimp(m[1]) : false;
};

console.log("## TRUE");
console.log(isSlurpy("AHDFG"));
console.log(isSlurpy("ADFGCDFFFFFG"));
console.log(isSlurpy("ABAEFGCCDFEFFFFFG"));

console.log("## FALSE");
console.log(isSlurpy("AHDFGA"));
console.log(isSlurpy("DFGAH"));
console.log(isSlurpy("ABABCC"));

Slimp
AH
AB (Slimp) C
A (Slump) C

Slurpy
(Slimp)(Slump)






---------------

String.prototype.isSlump = () => /^([DE]F+)+G$/g.exec(this) !== null;
var isSlump = s => /^([DE]F+)+G$/g.exec(s) !== null;
String.prototype.isSlimp = () => (this.m = /^(?:AH|A(?:[DE]F+)+GC|AB(.+)C)$/g.exec(this)) ? !this.m[1] || isSlimp(this.m[1]) : false;
String.prototype.isSlurpy = () => (this.m = /^(?:AH|A(?:[DE]F+)+GC|AB(.+)C)(?:[DE]F+)+G$/g.exec(this)) ? !this.m[1] || isSlimp(this.m[1]) : false;

var input =
`2
AHDFG
DFGAH`;

var lines = input.split("\n");
var length = parseInt(lines[0]);

console.log("SLURPYS OUTPUT");
for (let i = 1; i <= length; i++) {
	console.log(lines[i].isSlurpy() ? "YES" : "NO");
}
console.log("END OF OUTPUT");





//- 최종
String.prototype.isSlump = function() {
	var m =/^([DE]F+)+G$/g.exec(this);
	return m !== null;
};

String.prototype.isSlimp = function () {
    var m = /^(?:AH|A(?:[DE]F+)+GC|AB(.+)C)$/g.exec(this);
    return m ? !m[1] || m[1].isSlimp() : false;
};

String.prototype.isSlurpy = function() {
    var m = /^(?:AH|A(?:[DE]F+)+GC|AB(.+)C)(?:[DE]F+)+G$/g.exec(this);
    return m ? !m[1] || m[1].isSlimp() : false;
};

var input =
`2
AHDFG
DFGAH`;

var lines = input.split("\n");
var length = parseInt(lines[0]);

console.log("SLURPYS OUTPUT");
for (let i = 1; i <= length; i++) {
    console.log(lines[i].isSlurpy() ? "YES" : "NO");
}
console.log("END OF OUTPUT");

console.log("## TRUE");
console.log("DFG".isSlump());
console.log("EFG".isSlump());
console.log("DFFFFFG".isSlump());
console.log("DFDFDFDFG".isSlump());
console.log("DFEFFFFFG".isSlump());

console.log("## FALSE");
console.log("DFEFF".isSlump());
console.log("EFAHG".isSlump());
console.log("DEFG".isSlump());
console.log("DG".isSlump());
console.log("EFFFFDG".isSlump());

console.log("## TRUE");
console.log("AH".isSlimp());
console.log("ABAHC".isSlimp());
console.log("ABABAHCC".isSlimp());
console.log("ADFGC".isSlimp());
console.log("ADFFFFGC".isSlimp());
console.log("ABAEFGCC".isSlimp());
console.log("ADFDFGC".isSlimp());

console.log("## FALSE");
console.log("ABC".isSlimp());
console.log("ABAH".isSlimp());
console.log("DFGC".isSlimp());
console.log("ABABAHC".isSlimp());
console.log("SLIMP".isSlimp());
console.log("ADGC".isSlimp());

console.log("## TRUE");
console.log("AHDFG".isSlurpy());
console.log("ADFGCDFFFFFG".isSlurpy());
console.log("ABAEFGCCDFEFFFFFG".isSlurpy());

console.log("## FALSE");
console.log("AHDFGA".isSlurpy());
console.log("DFGAH".isSlurpy());
console.log("ABABCC".isSlurpy());
