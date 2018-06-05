import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.movie ? props.movie.title : '',
      genre: props.movie ? props.movie.genre : '',
      directorName: props.movie ? props.movie.director.name : '',
      directorGender: props.movie ? props.movie.director.gender : '',
      release_date: props.movie ? moment(props.movie.release_date, 'DD MMMM YYYY') : '',
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
      !this.state.title || 
      !this.state.genre ||
      !this.state.directorName || 
      !this.state.directorGender || 
      !this.state.release_date
    ) {
      this.setState(() => ({
        error: 'All fields are required'
      }));
    }else {
      this.setState(() => ({
        error: ''
      }));
      const title = this.state.title;
      const genre = this.state.genre;
      const directorName = this.state.directorName;
      const directorGender = this.state.directorGender;
      const release_date = this.state.release_date;
      this.props.onSubmit({ 
        title,
        genre,
        directorName,
        directorGender,
        release_date
      });
    }
  }

  render() {
    return (
      <form className='form' onSubmit={this.onSubmit}>
        { !!this.state.error && <p className='form__error'>{this.state.error}</p>}
        <input className='text-input' type='text' value={this.state.title} onChange={this.onTitleChange} placeholder='title' autoFocus/>
        <input className='text-input' type='text' value={this.state.genre} disabled placeholder='gender' />
        <input className='text-input' type='text' value={this.state.directorName} disabled placeholder='director name' />
        <input className='text-input' type='text' value={this.state.directorGender} disabled placeholder='director gender'/>
        <input className='text-input' type='text' value={this.state.release_date} disabled placeholder='release date' />
        <button className='button'>Edit Title / Close</button>
      </form>
    );
  }
}

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
};

export default MovieForm;