const filtersReducerDefaultState = {
    text: '',
    sortBy: 'title',
    genre: 'all'
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_TITLE':
            return {
                ...state,
                sortBy: 'title'
            };
        case 'SORT_BY_DIRECTOR':
            return {
                ...state,
                sortBy: 'director'
            };
        case 'SET_GENRE_FILTER':
            return {
                ...state,
                genre: action.genre
            };
        default:
            return state;
    }
};

export default filtersReducer;