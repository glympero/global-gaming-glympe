import React from 'react';
import { shallow } from 'enzyme';
import MovieForm from '../../components/MovieForm';
import movies from '../../fixtures/data';

let onSubmit, wrapper, match
beforeEach(() => {
    onSubmit = jest.fn();
    match = { params: 1 }

    wrapper = shallow(
        <MovieForm 
            onSubmit={onSubmit} 
            match={match}
            movie={movies[0]}
        />
    )
});

test('should render MovieForm correctly', () => {
    expect(wrapper).toMatchSnapshot();
});