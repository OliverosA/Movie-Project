import { Input, Choice, SelectChoice } from './models/Input';
import Movie from './models/Movie';
import ActionMovie from './models/ActionMovie';
import HorrorMovie from './models/HorrorMovie';

type ActionMovieInput = {
  name: string;
  director: string;
  language: string;
  running_time: string;
  year: string;
  explosions_count: string;
}

type HorrorMovieInput = {
  name: string;
  director: string;
  language: string;
  running_time: string;
  year: string;
  jump_scares_count: string;
}

export default class Main {
  movies: Movie[] = [];
  menuOptions: SelectChoice[] = [
    { option: 1, message: 'Add Action Movie' },
    { option: 2, message: 'Add Horror Movie' },
    { option: 3, message: 'Show Action Movies' },
    { option: 4, message: 'Show Horror Movies' },
    { option: 5, message: 'Increment Explosions In Movie' },
    { option: 6, message: 'Increment Jump Scares In Movie' },
    { option: 7, message: 'Exit' },
  ];

  actionMovieForm: Choice[] = [
    { name: 'name', message: 'Name' },
    { name: 'director', message: 'Director' },
    { name: 'language', message: 'Language' },
    { name: 'running_time', message: 'Running Time (min)' },
    { name: 'year', message: 'Year' },
    { name: 'explosions_count', message: 'Explosions Count' },
  ];

  horrorMovieForm: Choice[] = [
    { name: 'name', message: 'Name' },
    { name: 'director', message: 'Director' },
    { name: 'language', message: 'Language' },
    { name: 'running_time', message: 'Running Time (min)' },
    { name: 'year', message: 'Year' },
    { name: 'jump_scares_count', message: 'Jump Scares Count' },
  ];

  async start() {
    /* YOUR CODE HERE */
  }
}
