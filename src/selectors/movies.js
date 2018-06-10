const getVisibleMovies = (movies, filters) => {
    const {text, sortBy, genre } = filters;
    return movies.filter(movie => {
        const textMatched = typeof text === 'string' && movie.title.toLowerCase().indexOf(text.toLowerCase()) !== -1;
        const genreMatched = typeof genre === 'string' && genre === 'all' ? true : movie.genre.toLowerCase().indexOf(genre.toLowerCase()) !== -1;
        return textMatched && genreMatched;
    }).sort((a, b) => {
        if(sortBy === 'title') {
            return a.title > b.title ? 1 : -1;
        }else if (sortBy === 'director') {
            return a.director.toLowerCase() > b.director.toLowerCase() ? 1 : -1;
        }
    });
};

export default getVisibleMovies;