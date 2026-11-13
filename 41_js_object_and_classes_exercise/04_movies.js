function solve(moviesArr) {
    let movies = [];
    let moviesObj = [];
    let directors = {};
    let dates = {}

    for (const m of moviesArr) {
        if (m.includes('addMovie')) {
            const name = m.split('addMovie ')[1];
            movies.push(name);
        } else if (m.includes('directedBy')) {
            let [movieName, directorName] = m.split(' directedBy ');
            directors[movieName] = directorName;
        } else if (m.includes('onDate')) {
            let [movieName, date] = m.split(' onDate ');
            dates[movieName] = date;
        }
    }

    for (const movieName of movies) {
        const m = {name: movieName, director: directors[movieName], date: dates[movieName]};
        if (m.director && m.date) moviesObj.push(m);
    }

    return moviesObj.forEach((m) => console.log(JSON.stringify(m)));
}
