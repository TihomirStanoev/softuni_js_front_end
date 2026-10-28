function multiplicationTable(n) {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        result += `${n} X ${i} = ${n * i}\n`
    }
    console.log(result);
}

