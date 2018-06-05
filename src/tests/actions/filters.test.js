import { setTextFilter, sortByTitle, sortByDirector, setGenreFilter } 
from '../../actions/filters';

test('should setup setting empty text filters', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});


test('should setup setting text filters', () => {
    const action = setTextFilter('Rain Man');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rain Man'
    });
});

test('should setup setting title ordering', () => {
    const action = sortByTitle();
    expect(action).toEqual({
        type: 'SORT_BY_TITLE'
    });
});

test('should setup setting director ordering', () => {
    const action = sortByDirector();
    expect(action).toEqual({
        type: 'SORT_BY_DIRECTOR'
    });
});

test('should setup setting genre filters', () => {
    const action = setGenreFilter('Adventure');
    expect(action).toEqual({
        type: 'SET_GENRE_FILTER',
        genre: 'Adventure'
    });
});