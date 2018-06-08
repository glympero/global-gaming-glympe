import React from 'react';
import PropTypes from 'prop-types';
import MovieModal from './MovieModal';
import { connect } from 'react-redux';
import { editMovie, removeMovie } from '../actions/movies';

export class MovieEdit extends React.Component {
  
  onRemove = () => {
    this.props.removeMovie( {id: this.props.movie.id} );
    this.props.onClose();
  }

  onSubmit = (movie) => {
    this.props.editMovie(this.props.movie.id, movie);
    this.props.onClose();
  }

  render() {
    return (
        <MovieModal
          onSubmit={this.onSubmit}
          movie={this.props.movie}
          remove={this.onRemove}
        />
    )
  }
}

const mapStateToProps = (state, props) => {
  let movie = state.movies.find( e => e.id === props.id);
  return {
    movie
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    removeMovie: (data) => {
      dispatch(removeMovie(data));
    },
    editMovie: (id, movie) => {
      dispatch(editMovie(id, movie));
    }
  }
};

MovieEdit.propTypes = {
  removeMovie: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  movie: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieEdit);