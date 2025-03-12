function movies(input) {
    let movies = [];

    for (let command of input) {
        if (command.startsWith("addMovie ")) {
            let movieName = command.slice(9);
            movies.push({ name: movieName });
        } else if (command.includes(" directedBy ")) {
            let [movieName, director] = command.split(" directedBy ");
            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        } else if (command.includes(" onDate ")) {
            let [movieName, date] = command.split(" onDate ");
            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    movies
        .filter(m => m.name && m.director && m.date)
        .forEach(m => console.log(JSON.stringify(m)));
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
