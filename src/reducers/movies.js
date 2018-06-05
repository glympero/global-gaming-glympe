const moviesReducerDefaultState = [];

const moviesReducer = (state = moviesReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.movies;
        case 'REMOVE_MOVIE':
            return state.filter(movie => movie.id !== action.id);
        case 'EDIT_MOVIE':
            return state.map(movie => {
                if(movie.id === action.id) {
                    return {
                        ...movie,
                        ...action.updates
                    }
                }
                return movie;
            })
        default:
            return state;
    }
};

export default moviesReducer;