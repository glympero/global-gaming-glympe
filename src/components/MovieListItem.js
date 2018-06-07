import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardTitle, CardMedia} from 'material-ui';
import MovieEdit from './MovieEdit';
import moment from 'moment';

const styles = {
  cardTitle: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  cardMedia: {
    height: 280,
    width: 220,
    overflow: 'hidden'
  },
  card: {
    cursor: 'pointer',
    height: 280,
    overflow: 'hidden',
    margin: 15
  },
  bgImage: {
    width: '100%',
  }
};

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
    return (
      // <div>
      //   <div className='list-item' onClick={this.toggleModal}>
      //     <h3 className='list-item__title'>{this.props.title}</h3>
      //     <div style={{display: 'flex'}}>
      //       <p className='list-item__subtitle'>{this.props.genre}</p>
      //       <p className='list-item__author'>{this.props.director.name}</p>
      //     </div>
      //   </div>
      //   <Modal show={this.state.isOpen}>
      //     <MovieEdit id={this.props.id} onClose={this.toggleModal} />
      //   </Modal>    
      // </div>
      <MuiThemeProvider>
        <div>
          <Card
            style={styles.card}
            onClick={this.toggleModal}
            onMouseOver={() => this.setState({isMouseOver: true})}
            onMouseLeave={() => this.setState({isMouseOver: false})}
          >
            {/* <CardTitle title={<div style={styles.cardTitle}>{movie.title}</div>} /> */}
            <CardMedia
              style={styles.cardMedia}
              overlay={
                <CardTitle
                  title={this.props.title} 
                  subtitle={this.props.genre} 
                />
              }
            >
            <Modal show={this.state.isOpen}>
              <MovieEdit id={this.props.id} onClose={this.toggleModal} />
            </Modal>
            <img style={styles.bgImage} src={this.props.poster_path} />
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
  description: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  director: PropTypes.object.isRequired,
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired
};

export default MovieListItem;