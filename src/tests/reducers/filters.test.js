import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'title',
        genre: 'all'
    })
});

test('should sort by title', () => {
    const defaultState = {
        text:'Tight Ticket',
        sortBy: 'director',
        genre: 'all'
    }
    const action = { type: 'SORT_BY_TITLE' };
    const state = filtersReducer(defaultState, action);
    expect(state).toEqual({
        text: 'Tight Ticket',
        sortBy: 'title',
        genre: 'all'
    })
});

test('should sort by director', () => {
    
    const state = filtersReducer(undefined, { type: 'SORT_BY_DIRECTOR'});
    expect(state).toEqual({
        text: '',
        sortBy: 'director',
        genre: 'all'
    })
});

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'Tight Ticket',
        genre: 'all'
    }
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        text: 'Tight Ticket',
        sortBy: 'title',
        genre: 'all'
    });
});

test('should set genre filter', () => {
    const action = {
        type: 'SET_GENRE_FILTER',
        text: '',
        genre: 'Children'
    }
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        text: '',
        sortBy: 'title',
        genre: 'Children'
    });
});
