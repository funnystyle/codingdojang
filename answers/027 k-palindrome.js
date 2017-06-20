var compare = function(pal, k) {
    if (pal.length <= 1) return true;

    if (k < 1) return false;

    var mid = Math.floor(pal.length / 2);

    // head / tail 로 나눈다.
    // head 길이 <= tail 길이
    // tail 은 reverse 해놓는다
    var head = pal.slice(0, mid), tail = [...pal.slice(mid)].reverse().join("");
    var i = 0;
    while(head[i] && head[i] === tail[i]) i++;
    if (!head[i]) return true;
    else {
        console.log(2, head.slice(i + 1) + [...tail.slice(i)].reverse().join(""));
        console.log(3, head.slice(i) + [...tail.slice(i + 1)].reverse().join(""));
        return compare(head.slice(i + 1) + [...tail.slice(i)].reverse().join(""), k - 1)
            || compare(head.slice(i) + [...tail.slice(i + 1)].reverse().join(""), k - 1);
    }
};

compare("abxa", 1);
compare("abdxa ", 1);


var compare = function(pal, k) {
    if (pal.length <= 1) return true;

    if (pal[0] === pal.slice(-1)) {
        return compare(pal.slice(1, -1), k);
    } else {
        return k >= 1 && (compare(pal.slice(1), k - 1) || compare(pal.slice(0, -1), k - 1));
    }
};

console.log(compare("abxa", 1) ? "YES" : "NO"); // YES - aba : x
console.log(compare("abdxa", 1) ? "YES" : "NO"); // NO
console.log(compare("abcydedzcbxa", 3) ? "YES" : "NO"); // YES - abcdedcba : y z x
