import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from 'material-ui';
import moment from 'moment';

const styles = {
    dialogContent: (backgroundUrl) => ({
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      height: '100%',
      minHeight: 400,
      color: 'white',
      padding: 10
    })
  }

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.movie ? props.movie.title : '',
      error: ''
    }
  }

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({
      title
    }));
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    if(
      !this.state.title
    ) {
      this.setState(() => ({
        error: 'Title is required'
      }));
    }else {
      this.setState(() => ({
        error: ''
      }));
      const title = this.state.title;
      this.props.onSubmit({ 
        title,
      });
    }
  }

render() {
    const { movie } = this.props;
    return (
      <Dialog
        autoScrollBodyContent={true}
        title={null}
        modal={false}
        open={true}
      >
        <div style={styles.dialogContent(movie.poster_path)}>
        <h1>{this.state.title}</h1>
        <h5>{movie.genre}</h5>
        <p>{movie.description}</p>
        <p>Director: {movie.director.name}</p>
        <p>Release Date: {moment(movie.release_date).format("Do MMM YYYY")}</p>
        <button className='button button--modal' onClick={this.onSubmit}>Edit Title / Close</button>
        </div>
    </Dialog>
    );
  }
}

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
};

export default MovieForm;