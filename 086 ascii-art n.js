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
