import selectMovies from '../../selectors/movies';

import movies from '../../fixtures/data';

test('should filter by text value', () => {
    const filters = {
        text: 'Absolute Bite',
        sortBy: 'title',
        genre: 'all'
    };

    const result = selectMovies(movies, filters);
    expect(result).toEqual([
        movies[0]
    ])
});

test('should sort by title', () => {
    
    const filters = {
        text: '',
        sortBy: 'title',
        genre: 'all'
    };

    const result = selectMovies([movies[1], movies[0]], filters);
    expect(result).toEqual([
        movies[0], movies[1]
    ])
});

test('should sort by director', () => {
    
    const filters = {
        text: '',
        sortBy: 'director',
        genre: 'all'
    };

    const result = selectMovies([movies[0], movies[1]], filters);
    expect(result).toEqual([
        movies[1], movies[0]
    ])
});

test('should filter by genre value', () => {
    const filters = {
        text: '',
        sortBy: 'title',
        genre: 'Children'
    };

    const result = selectMovies(movies, filters);
    expect(result).toEqual([
        movies[1]
    ])
});