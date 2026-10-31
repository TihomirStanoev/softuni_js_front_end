function solve(sentence) {
    const words = sentence.match(/\w+/g);
    console.log(words.join(', ').toUpperCase());
}
