import React from 'react';
import Title from './Title';
import MovieList from './MovieList';
import MovieListFilters from './MovieListFilters';

const MovieDashboardPage = (props) => {
    return (
      <div>
        <Title title="Movies List"/>
        <MovieListFilters />
        <MovieList />
    </div>
    );
  };

export default MovieDashboardPage;