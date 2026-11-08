function perfectNumber(n) {
    if (n < 6) return 'It\'s not so perfect.';


    const halfNumber = n / 2;
    let halfSum = 0;
    for (let i = 1; i < halfNumber; i++) {
        if (n % i === 0) {
            halfSum += i;
        }
    }

    if (halfSum + halfNumber === n) {
        return 'We have a perfect number!'
    }
    return 'It\'s not so perfect.'
}
