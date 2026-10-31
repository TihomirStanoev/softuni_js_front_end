function solve(word, text) {
    const found = text.toLowerCase().split(' ').includes(word.toLowerCase());

    console.log(found ? word : `${word} not found!`);
}
