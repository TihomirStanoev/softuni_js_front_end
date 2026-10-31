function validityChecker(x1, y1, x2, y2) {
    function isValid(xa, ya, xb, yb) {
        const distance = Math.sqrt(Math.pow((xb - xa), 2) + Math.pow((yb - ya), 2));
        return Number.isInteger(distance);
    }

    const combinations = [
        [x1, y1, 0, 0],
        [x2, y2, 0, 0],
        [x1, y1, x2, y2]
    ]

    for (const [xa, ya, xb, yb] of combinations) {
        const valid = isValid(xa, ya, xb, yb) ? 'valid' : 'invalid';
        console.log(`{${xa}, ${ya}} to {${xb}, ${yb}} is ${valid}`);
    }
}