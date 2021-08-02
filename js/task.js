'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

if (personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}

// (personalMovieDB.count < 10) ? alert('Просмотрено довольно мало фильмов') :
// (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? alert('Вы классический зритель'):
// (personalMovieDB.count >= 30) ? alert('Вы киноман') : 'Произошла ошибка';


for (let i = 0; i < 2; i++) {
  let lastWatchFilm = prompt('Один из последних просмотренных фильмов?', '');
  let ratingLastWatchFilm = prompt('На сколько оцените его?', '');

  if (
    lastWatchFilm != null &&
    ratingLastWatchFilm != null &&
    lastWatchFilm != '' &&
    ratingLastWatchFilm != '' &&
    lastWatchFilm.length < 50
  ) {
    personalMovieDB.movies[lastWatchFilm] = ratingLastWatchFilm;
    console.log('Все ок');
  } else {
    console.log('Ошибка');
    i--;
  }
}

console.log(personalMovieDB);

