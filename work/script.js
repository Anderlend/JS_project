"use strict";

const numderOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");

const personalMovieDB = {
    count: numderOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из просмотреных фильмов?", ""),
      b = prompt(" ОЦЕНКА?",),
      c = prompt("Один из просмотреных фильмов?", ""),
      d = prompt(" ОЦЕНКА?");

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);
      
