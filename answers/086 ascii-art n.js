/*
ASCII Art N

Write a program that lets the user enter in an odd positive integer (you may assume the input is always valid), and prints out an ASCII art letter N made using the character N.

If the input is 1, the output is:

N
If the input is 3, the output is:

N N
NNN
N N
If the input is 5, the output is:

N   N
NN  N
N N N
N  NN
N   N
If the input is 7, the output is:

N     N
NN    N
N N   N
N  N  N
N   N N
N    NN
N     N
The pattern continues on like this. The output may contain trailing spaces.

ascii-art
*/

var asciiartn = function(n) {
    console.log(Array.from(Array(n), (_, r) => Array.from(Array(n), (_, c) => (c === r || c === 0 || c === n - 1) ? "N" : " ").join("")).join("\n"));
};

asciiartn(1);
asciiartn(3);
asciiartn(5);
asciiartn(7);

//---

N     N
NN    N
N N   N
N  N  N
N   N N
N    NN
N     N


var asciiartn = function(n) {
    var s = "";
    for (let i = 0; i < n; i++) {
        s += "N" + " ".repeat() + "N".repeat() + " ".repeat(n - i - 2) + "N" + "\n";
    }
    console.log(s);
};

005
014
113
212
311
410
500


var asciiartn = function(n) {
    console.log(Array.from(Array(n), (_, r) => Array.from(Array(n), (_, c) => (c === r || c === 0 || c === n - 1) ? "N" : " ").join("")).join("\n"));
};

var asciiartn = function(n) {
    console.log(Array.from(Array(n), function(_, r) {
        return Array.from(Array(n), function(_, c) {
            return (c === r || c === 0 || c === n - 1) ? "N" : " ";
        }).join("");
    }).join("\n"));
};

asciiartn(1);
asciiartn(3);
asciiartn(5);
asciiartn(7);

var asciiartn = function(n) {
    console.log(Array.from(Array(n), (_, i) => " ".repeat(i) + "N" + " ".repeat(n - i - 1)).map(v => "N" + v.slice(1, -1) + "N").join("\n"));
};

asciiartn(1);
asciiartn(3);
asciiartn(5);
asciiartn(7);







var array = Array.from({length: 1000}, (v, k) => k + 1); 
var filter = n => n % 3 === 0 || n % 5 === 0;
var add = (a, b) => a + b;
var sum = array.filter(filter).reduce(add);
console.log(sum);


console.log(Array.from(Array(1000),(_,i)=>i+1).filter(!n%3||!n%5).reduce((a,b)=>a+b));
