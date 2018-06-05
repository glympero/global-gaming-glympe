import moment from 'moment';
import faker from 'faker';
import { name1, name2 } from './names';
import { genres } from './genres';

const gender = [
  'Male',
  'Female'
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const capFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const generateMovieTitle = () => {	
  const title = capFirst(name1[getRandomInt(0, name1.length - 1)]) + ' ' + capFirst(name2[getRandomInt(0, name2.length - 1)]);
  return title;
}

const generateDirectorName = () => {	
  return `${faker.name.lastName()} ${faker.name.firstName()}`;
}

const generateMovies = (number) => {
  let movies = [];
  for(let i = 0; i < number; i++){
    movies.push(
      {
        id: faker.random.uuid(),
        title: generateMovieTitle(),
        director: {
          name: generateDirectorName(),
          gender: gender[getRandomInt(0,1)]
        },
        genre: genres[faker.random.number(6)],
        release_date: faker.date.past()
      }
    )
  }
  return movies;
}

const movies = JSON.stringify(generateMovies(100));

export default movies;