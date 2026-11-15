function solve(stringArr) {
    function countWords(wordArr) {
    const result = {};

    for (const w of wordArr) {
        if (w in result) {
            result[w] += 1;
        } else {
            result[w] = 0;
        }
    }
    return result;
}
    const wordsObj = countWords(stringArr.toLowerCase().split(' '));
    const result = [];

    for (const [w,c] of Object.entries(wordsObj)) {
        if (c % 2 === 0) {
            result.push(w);
        }
    }
    console.log(result.join(' '));
}
