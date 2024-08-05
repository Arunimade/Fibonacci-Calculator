function calculateFibonacci() {
    const number = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    if (number === '' || number < 0) {
        resultDiv.textContent = 'Please enter a non-negative number.';
        return;
    }

    const n = parseInt(number);
    const fibonacciSeries = [];

    for (let i = 0; i <= n; i++) {
        fibonacciSeries.push(fibonacci(i));
    }

    resultDiv.textContent = `Fibonacci series up to ${n}: ${fibonacciSeries.join(', ')}`;
}

function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
