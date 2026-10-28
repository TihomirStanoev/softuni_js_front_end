function sumDigits(n) {
    let totalSum = 0;

    for (const i of n.toString()) {
        totalSum += Number(i);
    }

    console.log(totalSum);
}

