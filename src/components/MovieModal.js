import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from 'material-ui';
import Edit from "material-ui/svg-icons/image/edit"
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
      allowEdit: false,
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

  onAllowEditChange = () => {
    this.setState({
      allowEdit: !this.state.allowEdit
    })
  }

  confirmRemove = () => {
    const { remove } = this.props;
    const result = confirm("Want to delete?");
    if(result){
      remove();
    }
    return false;
  }

render() {
    const { movie } = this.props;
    const { allowEdit, title, error } = this.state;
    return (
      <Dialog
        autoScrollBodyContent={true}
        title={null}
        modal={false}
        open={true}
      >
        <div style={styles.dialogContent(movie.poster_path)}>
        <h1>{title} <button className='editButton' onClick={this.onAllowEditChange}><Edit style={{ color: 'red'}}/></button></h1>
        { allowEdit && <input className='text-input' type='text' value={title} onChange={this.onTitleChange} placeholder='title' autoFocus/> }
        { !!error && <p className='form__error'>{error}</p>}
        <h5>{movie.genre}</h5>
        <p>{movie.description}</p>
        <p>Director: {movie.director.name}</p>
        <p>Release Date: {moment(movie.release_date, "Do MMM YYYY")}</p>
        <div className='modal--buttons'>
          <button className='button button--modal' onClick={this.onSubmit}>Close</button>
          { allowEdit && <button className='button button--modal button--danger' onClick={this.confirmRemove}>Remove</button> }
        </div>
        </div>
    </Dialog>
    );
  }
}

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired
};

export default MovieForm;