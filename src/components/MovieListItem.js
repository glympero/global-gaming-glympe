import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import MovieEdit from './MovieEdit';
import moment from 'moment';

class MovieListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <div className='list-item' onClick={this.toggleModal}>
          <h3 className='list-item__title'>{this.props.title}</h3>
          <p className='list-item__subtitle'>{this.props.genre}</p>
          <p className='list-item__author'>{this.props.director.name}</p>
        </div>
        <Modal show={this.state.isOpen}>
          <MovieEdit id={this.props.id} onClose={this.toggleModal} />
        </Modal>    
      </div>
    );
  }
};

MovieListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  director: PropTypes.object.isRequired,
  release_date: PropTypes.string.isRequired
};

export default MovieListItem;