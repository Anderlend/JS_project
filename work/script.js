"use strict";


const numderOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");

const personalMovieDB = {
    count: numderOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


      console.log(personalMovieDB);
      for ( let i = 0; i < 2; i++){
        const a = prompt("Один из просмотреных фильмов?", ""),
            b = prompt(" ОЦЕНКА?",);
        if ( a != null && b != null && a != "" && b != "" && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log("Mission complite");
        
        }
        else{
            console.log("err");
            i--;
        }

        if ( personalMovieDB.count < 10) {
            console.log("Ви переглянули дуже мало фільмів");
        }else if (10 < personalMovieDB.count < 30){
            console.log("ви переглянули достатню кількість фільмів");
        }else if (personalMovieDB.count >= 50){
            console.log("Ви гуу перегляду фільмів");
        }else{
            console.log(",'''''''''''''''''''");
        }

        
        
      }
      


/*
const num = 50;
( num == 50 ) ? console.log("OK!") : console.log("eRRoR");

switch (num) {
    case 49: 
        console.log("NOO!");
        break;
    case 100:
        console.log("NOO!");
        break;
    case 50:
        console.log("YEEES!");
        break;
    default:
        console.log("Not today Brooo!");
        break;
};


let num = 0;

while ( num < 55 ){
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
 while( num < 55 );

 for (let i = 0; i < 10; i+=2){
    if (i == 6){
        continue;
    } 
    console.log(i)
 }*/