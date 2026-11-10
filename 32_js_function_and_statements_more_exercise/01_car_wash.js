function carWash(commandArr) {
    const actions = {
        'soap': val => val + 10,
        'water': val => val * 1.2,
        'vacuum cleaner': val => val * 1.25,
        'mud': val => val * 0.9,
    };

    let cleanPr = 0;

    for (const command of commandArr) {
        cleanPr = actions[command](cleanPr);
    }
    return `The car is ${cleanPr.toFixed(2)}% clean.`;
}
