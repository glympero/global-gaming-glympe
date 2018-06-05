import { setMovie, removeMovie, editMovie } from '../../actions/movies';
import movies from '../../fixtures/data';

test('should setup set movies action object', () => {
    const action = setMovie(movies);
    expect(action).toEqual({
        type: 'SET_MOVIES',
        movies
    });
});

test('should setup edit movie action object', () => {
    const id = '2';
    const updates = {
        title: 'New Name'
    };

    const action = editMovie(id, updates);
    expect(action).toEqual({
        type: 'EDIT_MOVIE',
        id: '2',
        updates: {
            title: 'New Name'
        }
    })
});

test('should setup remove movie action object', () => {
    const action = removeMovie({id: '1'});
    expect(action).toEqual({
        type: 'REMOVE_MOVIE',
        id: '1'
    });
});

