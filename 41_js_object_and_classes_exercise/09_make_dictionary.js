function solve(jsonArr) {
    const dictObj = {};

    for (const t of jsonArr) {
        const termObj = Object.entries(JSON.parse(t));
        const term = termObj[0][0];
        dictObj[term] = termObj[0][1];
    }

    Object.keys(dictObj).sort((a, b) => a.localeCompare(b))
        .forEach((k) => console.log(`Term: ${k} => Definition: ${dictObj[k]}`));
}
