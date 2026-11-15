function catalogue(products) {
    const catalogue = {};

    for (const p of products) {
        const [name, price] = p.split(' : ');
        const letter = name[0];

        if (!Object.keys(catalogue).includes(letter)) catalogue[letter] = {};
        catalogue[letter][name] = Number(price);

    }

    const catalogueSorted = Object.entries(catalogue).sort(([a], [b]) => a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()))

    for (const [letter, items] of catalogueSorted) {
        console.log(letter);
        const itemsSorted = Object.entries(items).sort(([a], [b]) => a.toLowerCase().localeCompare(b.toLowerCase()));
        itemsSorted.forEach(([a, b]) => console.log(`  ${a}: ${b}`))
    }
}
