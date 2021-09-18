"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms == "") {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из просмотреных фильмов?", ""),
            b = prompt(" ОЦЕНКА?", );
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("Mission complite");

        } else {
            console.log("err");
            i--;
        }
    }

    rememberMyFilms();


    function detectPersonalLevel(){
        if (personalMovieDB.count < 10) {
            console.log("Ви переглянули дуже мало фільмів");
        } else if (10 < personalMovieDB.count < 30) {
            console.log("ви переглянули достатню кількість фільмів");
        } else if (personalMovieDB.count >= 50) {
            console.log("Ви гуу перегляду фільмів");
        } else {
            console.log(",'''''''''''''''''''");
        }
    }
    detectPersonalLevel();


}

function showMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function wrireYourGeners(){
    for (let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`Напишите Ваш любимый жанр под номером: ${i}`);
    }
}

wrireYourGeners();















/*
let num = 20;


function showFirstMessage(text){
    console.log(text);
     num = 15;
}



console.log(num); 


showFirstMessage("Hello world!");

console.log(num); 


function calc(a, b){
    return (a + b);
}

console.log(calc(5, 88));

function ret(){
    let num = 50;
    return num;
}

const anothreNum = ret();
console.log(anothreNum);

const logger  = function() {
    console.log("fccfcfcfc");
};

logger();

const calc = (a, b) => {return a + b};

*/

/*
const str = "test";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("7"));

const logg = " Hello World";

console.log(logg.slice(7, 9));

console.log(logg.substring(7, 9));

console.log(logg.substr(7, 5));

const num = 12.9;

console.log(Math.round(num));

const test = "12.2px";
console.log(parseFloat(test));
    */


/*

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
      */


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