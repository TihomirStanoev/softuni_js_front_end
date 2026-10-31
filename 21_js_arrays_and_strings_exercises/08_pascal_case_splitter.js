function solve(singleString) {
    const words = singleString.match(/[A-Z][a-z]*/g) ?? [];
    console.log(words.join(', '));
}
