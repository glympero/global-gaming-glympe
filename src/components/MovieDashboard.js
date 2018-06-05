import React from 'react';
import Title from './Title';
import MovieList from './MovieList';
import MovieListFilters from './MovieListFilters';
import Card from './Card';

const MovieDashboard = (props) => {

    return (
      <div>
        <Title title="Welcome to our Movies database" />
        <Card />
    </div>
    );
  };

export default MovieDashboard;