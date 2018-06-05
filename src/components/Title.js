import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({title}) => {
  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>
          {title}
        </h1>
      </div>
    </div>
  )
}

Title.propTypes = {
    title: PropTypes.string
};

export default Title;