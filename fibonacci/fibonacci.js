const fibonacci = function(num) {
    // We cam also do this with Memoization
    if (num < 1) return "OOPS";

    let a = 0;
    let b = 1;
    let temp;
    
    while (num > 0) {
        temp = a;
        a = b;
        b += temp;
        num -= 1;
    }

    return a;
}

module.exports = fibonacci
