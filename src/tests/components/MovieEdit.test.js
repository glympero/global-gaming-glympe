import React from 'react';
import { shallow } from 'enzyme';
import { MovieEdit } from '../../components/MovieEdit';
import movies from '../../fixtures/data';

let editMovie, removeMovie, onClose, wrapper, match
beforeEach(() => {
    editMovie = jest.fn();
    removeMovie = jest.fn();
    onClose = jest.fn();
    match = { params: 1 }

    wrapper = shallow(
        <MovieEdit 
            editMovie={editMovie} 
            removeMovie={removeMovie} 
            onClose={onClose} 
            match={match}
            movie={movies[0]}
        />
    )
});

test('should render EditMoviePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should test editMovie correctly', () => {
    wrapper.find('MovieForm').prop('onSubmit')(movies[1]);
    expect(onClose).toHaveBeenLastCalledWith();
    expect(editMovie).toHaveBeenLastCalledWith(movies[0].id, movies[1]);
});

test('should test remove movie correctly', () => {
    wrapper.find('button').prop('onClick')();
    expect(onClose).toHaveBeenLastCalledWith();
    expect(removeMovie).toHaveBeenLastCalledWith({ id: movies[0].id})
});