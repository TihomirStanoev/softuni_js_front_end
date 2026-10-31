function solve(arr) {
    let arrSorted = arr.sort((a, b) => a - b);
    let result = [];

    let flag = true;
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        if(!flag) {
            result.push(arrSorted.pop())
        } else {
            result.push(arrSorted.shift())
        }
        flag = !flag;
    }


    return result;
}
