import React from 'react';
import { shallow } from 'enzyme';
import MovieModal from '../../components/MovieModal';
import movies from '../../fixtures/data';

let onSubmit, wrapper, match, remove
beforeEach(() => {
    onSubmit = jest.fn();
    match = { params: 1 }
    remove = jest.fn();

    wrapper = shallow(
        <MovieModal 
            onSubmit={onSubmit} 
            match={match}
            movie={movies[0]}
            remove={remove}
        />
    )
});

test('should render MovieModal correctly', () => {
    expect(wrapper).toMatchSnapshot();
});