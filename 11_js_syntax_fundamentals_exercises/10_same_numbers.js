function sameNumbers(number) {
    let isSame = true;
    let numberString = number.toString();
    let totalSum = 0;


    const firstDigit = numberString[0];

    for (let c of numberString) {
        if (c !== firstDigit) {
            isSame = false;
        }
        totalSum += Number(c);
    }
    console.log(isSame);
    console.log(totalSum);
}
