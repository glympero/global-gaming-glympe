import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle, CardMedia} from 'material-ui';
import MovieEdit from './MovieEdit';
import moment from 'moment';

class MovieListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      isMouseOver: false
    });
  }

  render() {

    const { id, title, director, genre, poster_path } = this.props;

    return (
      <MuiThemeProvider>
        <div>
          <Card
            className='list-item__card'
            onClick={this.toggleModal}
            onMouseOver={() => this.setState({isMouseOver: true})}
            onMouseLeave={() => this.setState({isMouseOver: false})}
          >
            <CardMedia
              className='list-item__cardMedia'
              overlay={
                <CardTitle
                  title={title} 
                  subtitle={`${director} - ${genre}`}
                />
              }
            >
            <Modal show={this.state.isOpen}>
              <MovieEdit id={id} onClose={this.toggleModal} />
            </Modal>
            <img className='list-item__bgImage' src={poster_path} />
            </CardMedia>
          </Card>
        </div> 
      </MuiThemeProvider>
    );
  }
};

MovieListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired
};

export default MovieListItem;