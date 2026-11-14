function solve(arr) {
    const words = {};
    const [targetWords, ...otherWords] = arr;


    for (const w of targetWords.split(' ')) words[w] = 0

    for (const w of otherWords) {
        if (w in words) {
            words[w] += 1;
        }
    }

    Object.entries(words).sort((a, b) => b[1] - a[1])
        .forEach(([w, q]) => console.log(`${w} - ${q}`))
}

