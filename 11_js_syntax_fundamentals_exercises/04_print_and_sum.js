function printAndSum(a, b) {
    let totalSum = 0;
    let result = '';
    for (;a <= b;a++) {
        result += `${a} `;
        totalSum += a;
    }
    result += `\nSum: ${totalSum}`
    console.log(result)

}
