import moviesReducer from '../../reducers/movies';
import movies from '../../fixtures/data';

test('should setup default movies state ', () => {
    const state = moviesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should setup an movies', () => {
    const action = {
        type: 'SET_MOVIE',
        movies
    }
    const state = moviesReducer(movies, action);
    expect(state).toEqual(movies);
});

test('should remove an movie', () => {
    const action = {
        type: 'REMOVE_MOVIE',
        id: movies[0].id
    }
    
    const state = moviesReducer([movies[0], movies[1]], action);
    expect(state).toEqual([movies[1]]);
});

test('should not remove an movie', () => {
    const action = {
        type: 'REMOVE_MOVIE',
        id: '-1'
    }
    const state = moviesReducer([movies[0], movies[1]], action);

    expect(state).toEqual([movies[0], movies[1]]);
});

test('shound edit an existing movie', () => {
    const editedMovie = {
        title: 'Tight Ticket',
    }
    const action = {
        type: 'EDIT_MOVIE',
        id: movies[0].id,
        updates: editedMovie
    }

    const state = moviesReducer([movies[0], movies[1]], action);

    expect(state).toEqual([
        {
            id: movies[0].id,
            title: 'Tight Ticket',
            genre: 'Drama@april.biz',
            director: 'Walsh Mertie',
            runtime: 120,
            release_date: '2017',
            poster_path: '12345'
            },
        movies[1]
    ]);
});

test('shound not edit an movie with wrong id', () => {
    const editedMovie = {
        title: 'Tight Ticket',
    }
    const action = {
        type: 'EDIT_MOVIE',
        id: '-1',
        updates: editedMovie
    }
    const state = moviesReducer(movies, action);

    expect(state).toEqual(movies)
})