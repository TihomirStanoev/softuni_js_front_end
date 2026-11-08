function factorialDivision(a, b) {
    function factorial(a) {
        if (a <= 1) return 1;
        return a * factorial(a - 1)
    }
    return (factorial(a) / factorial(b)).toFixed(2);
}
