import React from 'react';
import { shallow } from 'enzyme';
import MovieDashboard from '../../components/MovieDashboard';

test('should render UserDashboard', () => {
    const wrapper = shallow(< MovieDashboard />);
    expect(wrapper).toMatchSnapshot();
});