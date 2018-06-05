import React from 'react';
import { shallow } from 'enzyme';

import { MovieList } from '../../components/MovieList'; 
import movies from '../../fixtures/data';

let dispatch, setMovie
beforeEach(() => {
    setMovie = jest.fn();
    dispatch = jest.fn();
});


test('should render MovieList with movies', () => {
    const wrapper = shallow(<MovieList movies={movies} dispatch={dispatch} setMovie={setMovie}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render MovieList without users', () => {
    const wrapper = shallow(<MovieList movies={[]} dispatch={dispatch} setMovie={setMovie}/>)
    expect(wrapper).toMatchSnapshot();
});