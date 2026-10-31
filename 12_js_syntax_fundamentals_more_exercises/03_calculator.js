function calculator(n1, op, n2) {
    let result;
    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        case '*':
            result = n1 * n2;
            break;
    }
    console.log(result.toFixed(2));
}
