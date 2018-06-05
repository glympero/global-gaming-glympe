import React from 'react';
import { shallow } from 'enzyme';
import MovieListItem from '../../components/MovieListItem';
import movies from '../../fixtures/data';

test('should render MovieListItem with props', () => {
    const wrapper = shallow(<MovieListItem key={movies[0].id} {...movies[0]} />)
    expect(wrapper).toMatchSnapshot();
})