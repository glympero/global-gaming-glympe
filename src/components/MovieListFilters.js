import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTextFilter, sortByTitle, sortByDirector, setGenreFilter } from '../actions/filters';
import { genres } from '../fixtures/genres';


const MovieListFilters = (props) => {

  return (
    <div className='content-container'>
      <div className='input-group'>
      <div className='input-group__item'> 
          <select
            className='select'
            value={props.filters.genre}
            onChange={(e) => {
              const filter = e.target.value;
              props.dispatch(setGenreFilter(filter));
            }}>
            <option key='all' value='all'>All</option>
            
            {
              genres.map(function(genre) {
                return <option key={genre}
                  value={genre}>{genre}</option>;
              })
            }
        </select>
        </div>
        <div className='input-group__item'> 
        <input 
          type='text'
          placeholder='Search title'
          className='text-input'
          value={props.filters.text}
          onChange={(event) => {
            props.dispatch(setTextFilter(event.target.value)
          );
        }} />
        </div>
        <div className='input-group__item'> 
          <select
            className='select'
            value={props.filters.sortBy} 
            onChange={(e) => {
              const filter = e.target.value;
              if(filter === 'title') {
                props.dispatch(sortByTitle());
              }else if(filter === 'director') {
                props.dispatch(sortByDirector());
              }
            }}>
          
          <option value='title'>Title</option>
          <option value='director'>Director</option>
        </select>
        </div>
     </div>
    </div>
  )
}
    

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

MovieListFilters.propTypes = {
  dispatch: PropTypes.func.isRequired,
  filters: PropTypes.object
};

export default connect(mapStateToProps)(MovieListFilters);

 