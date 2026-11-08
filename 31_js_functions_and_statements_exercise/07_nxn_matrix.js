function nxnMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push(`${n} `.repeat(n));
    }

    console.log(matrix.join('\n'))
}
