import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setMovie } from '../actions/movies';
import MovieListItem from './MovieListItem';
import selectmovies from '../selectors/movies';

import data from '../fixtures/movies';

export class MovieList extends React.Component {

  componentDidMount = () => {
    this.props.setMovie(JSON.parse(data));
  }

  render() {
    return (
      <div className='content-container'>
        <div className='list-body'>
          {
            this.props.movies.length === 0 ? (
              <p>No movies Found</p>
            ) : (
              this.props.movies.map((movie) => {
                return (
                  <MovieListItem key={movie.id}  {...movie} />
                );
              })
            )
          }
        </div>
      </div>    
    );
  }
};

const mapStateToProps = (state) => {
  return {
    movies: selectmovies(state.movies, state.filters)
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    setMovie: (data) => {
      dispatch(setMovie(data));
    }
  }
};

MovieList.propTypes = {
  movies: PropTypes.array,
  setMovie: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
