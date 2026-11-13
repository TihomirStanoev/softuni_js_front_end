function towns(townsArr) {
    const towns = [];

    for (const t of townsArr) {
        const [town, latitude, longitude] = t.split(' | ');
        towns.push({
            town: town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        })
    }

    for (const c of towns) {
        console.log(c)
    }
}