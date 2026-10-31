function solve(singleString) {
    const matches = singleString.match(/#[A-z]+/g);

    for (const w of matches) {
        console.log(`${w.replace('#','')}`);
    }
}
