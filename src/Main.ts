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

  async start() {
    /* YOUR CODE HERE */
  }
}
