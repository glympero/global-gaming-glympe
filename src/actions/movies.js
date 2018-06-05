//SET_MOVIES
const setMovie = (movies) => ({
    type: 'SET_MOVIES',
    movies
  });

// REMOVE_MOVIE
const removeMovie = ({ id } = {}) => ({
    type: 'REMOVE_MOVIE',
    id
});

// EDIT_MOVIE
const editMovie = (id, updates) => ({
    type: 'EDIT_MOVIE',
    id,
    updates
});

export { setMovie, removeMovie, editMovie };