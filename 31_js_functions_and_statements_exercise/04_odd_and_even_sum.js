function oddAndEvenSum(number) {
    const stringNumber = String(number);
    let odd = 0;
    let even = 0;

    for (const n of stringNumber) {
        const number = Number(n);
        if (number % 2 === 0) {
            even += number;
        } else {
            odd += number
        }
    }

    return `Odd sum = ${odd}, Even sum = ${even}`
}
