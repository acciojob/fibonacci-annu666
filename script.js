function fibonacci(num) {
    let n1 = 0, n2 = 1, nextTerm;

    if (num === 1) {
        return n1;
    }

    for (let i = 2; i <= num; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    return n1;
}

function displayFibonacci() {
    let num = parseInt(prompt("Enter a number:"));
    let result = fibonacci(num);
    document.getElementById("result").innerText = "The Fibonacci number is " + result;
}

module.exports = { fibonacci, displayFibonacci };
