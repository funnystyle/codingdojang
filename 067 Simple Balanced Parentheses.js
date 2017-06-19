

"(()()()())"
"(((())))"
"(()((())()))"

"((((((())"
"()))"
"(()()(()"
"(()))("
"())(()"

var balanced = function(parens) {
    var stack = 0;
    var pushpop = { "(" : 1, ")" : -1 };
    
    for (p of parens.split("")) {
        stack += pushpop[p];
        if (stack < 0) return false;
    }
    return stack === 0;
};


// true
console.log(balanced("(()()()())"));
console.log(balanced("(((())))"));
console.log(balanced("(()((())()))"));

// false
console.log(balanced("((((((())"));
console.log(balanced("()))"));
console.log(balanced("(()()(()"));
console.log(balanced("(()))("));
console.log(balanced("())(()"));
