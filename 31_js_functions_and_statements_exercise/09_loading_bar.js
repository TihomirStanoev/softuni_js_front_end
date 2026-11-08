function loadingBar(pr) {
    function createBar(pr) {
        let bar = '';
        for (let i = 0; i < 100; i += 10) {
            i < pr ? bar += '%' : bar += '.';
        }
        return '[' + bar + ']';
    }

    const bar = createBar(pr);

    if (pr === 100) {
        return `${pr}% Complete!\n${bar}`;
    }
    return `${pr}% ${bar}\nStill loading...`;
}
