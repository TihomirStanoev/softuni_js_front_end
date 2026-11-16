function subtract() {
    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');
    const resultSpan = document.getElementById('result');

    resultSpan.textContent = `${Number(firstNumber.value) - Number(secondNumber.value)}`;
}