function solve(arr, k) {
    for (let i = 0; i < k; i++) {
        let firstElement = arr.shift();
        arr.push(firstElement);
    }
    console.log(arr.join(' '));
}

