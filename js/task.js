'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }  
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function detectPersonalLevel () {
  
  if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

//detectPersonalLevel()


// (personalMovieDB.count < 10) ? alert('Просмотрено довольно мало фильмов') :
// (personalMovieDB.count >= 10 && personalMovieDB.count < 30) ? alert('Вы классический зритель'):
// (personalMovieDB.count >= 30) ? alert('Вы киноман') : 'Произошла ошибка';


function rememberMyFilms() {
  
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
}

//rememberMyFilms();

function writeYourGeneres() {
  for (let i = 1;  i <= 3; i++) {
    personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }

}

writeYourGeneres();

  


function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);    
  } 
}
  showMyDB(personalMovieDB.privat);

