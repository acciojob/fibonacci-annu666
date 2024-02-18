function fibonacci(num) {
    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 2; i <= num; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    if(num === 1) {
        return n1;
    } else {
        return n2;
    }
}

module.exports = fibonacci;
