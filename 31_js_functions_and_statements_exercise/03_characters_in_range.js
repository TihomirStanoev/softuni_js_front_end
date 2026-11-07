function charactersBetweenTwo(a, b) {
    let result = [];
    const startFrom = Math.min(a.charCodeAt(0), b.charCodeAt(0));
    const endTo = Math.max(a.charCodeAt(0), b.charCodeAt(0));

    for (let i = startFrom + 1; i < endTo; i++) {
        result.push(String.fromCharCode(i));
    }

    return result.join(' ');
}
