
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_TITLE
const sortByTitle = () => ({
    type: 'SORT_BY_TITLE'
});

// SORT_BY_DIRECTOR
const sortByDirector = () => ({
    type: 'SORT_BY_DIRECTOR'
});

// SET_GENRE_FILTER
const setGenreFilter = (genre) => ({
    type: 'SET_GENRE_FILTER',
    genre
})

export { setTextFilter, sortByTitle, sortByDirector, setGenreFilter };