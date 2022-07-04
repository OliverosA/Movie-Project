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

  async addActionMovie() {
    const info: ActionMovieInput = (
      await Input.getForm('Fill the following: ', this.actionMovieForm)
    ).data;
    const guns: boolean = (
      await Input.getConfirm('Are there guns in this movie?')
    ).data;
    const martial_arts: boolean = (
      await Input.getConfirm('Are there martial arts in this movie?')
    ).data;
    this.movies.push(
      new ActionMovie(
        info.name,
        info.director,
        info.language,
        Number(info.running_time),
        Number(info.year),
        Number(info.explosions_count),
        guns,
        martial_arts
      )
    );
  }

  async addHorrorMovie() {
    const info: HorrorMovieInput = (
      await Input.getForm('Fill the following: ', this.horrorMovieForm)
    ).data;
    const ghosts: boolean = (
      await Input.getConfirm('Are there ghosts in this movie?')
    ).data;
    const visions: boolean = (
      await Input.getConfirm('Are there visions in this movie?')
    ).data;
    this.movies.push(
      new HorrorMovie(
        info.name,
        info.director,
        info.language,
        Number(info.running_time),
        Number(info.year),
        Number(info.jump_scares_count),
        ghosts,
        visions
      )
    );
  }

  showActionMovies() {
    this.movies.forEach((movie: Movie) => {
      if (movie instanceof ActionMovie) movie.printActionMovie();
    });
  }

  showHorrorMovies() {
    this.movies.forEach((movie: Movie) => {
      if (movie instanceof HorrorMovie) movie.printHorrorMovie();
    });
  }

  async incrementJumpScares() {
    const horrorMoviesOptions: Choice[] = this.movies
      .filter((movie: Movie) => movie instanceof HorrorMovie)
      .map((movie: Movie) => ({
        name: movie.id,
        message: movie.name,
      }));
    if (horrorMoviesOptions.length === 0) {
      return console.log('No Horror Movies Available');
    }
    const idOfMovieToIncrementJumpScares = (
      await Input.getSelectById('Select The Horror Movie', horrorMoviesOptions)
    ).data;
    this.movies.forEach((movie: Movie) => {
      if (movie.id === idOfMovieToIncrementJumpScares) {
        if (movie instanceof HorrorMovie) return movie.incrementJumpscares();
      }
    });
    console.log('😨😱💀 Jump Scare has been added!');
  }

  async start() {
    /* YOUR CODE HERE */
  }
}
