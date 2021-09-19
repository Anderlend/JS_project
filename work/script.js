 "use strict";

//OOP

console.dir([1, 2, 5]);

const soilder = {
    health: 555,
    armor: 122,
    sayHello: function  (){
        console.log("Hello");
    }
};

const john = {
    health: 200
};

Object.setPrototypeOf(john, soilder);

john.sayHello();


const human = Object.create(soilder);

console.log(human.health);









/*
let a = 5,
    b = a;


b = b + 5;
console.log(b);
console.log(a);


const obj = {
    a: 5,
    b: 1
}

console.log(obj);

const copy = obj;
copy.a = 10;

console.log(obj);
console.log(copy);

function copyArr (mainObj){
let copyObj = {};

    for (let key in mainObj){
        copyObj[key] = mainObj[key];
    }
    return copyObj;
}

const numbers = {
    a: 5,
    b: 444, 
    c: {
        x: 5,
        y: 55
    } 
};

const copyNumbers = copyArr(numbers);

console.log(numbers);
console.log(copyNumbers);


const add = {
    d: 66, 
    e: 44
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);

clone.d = 3333;

console.log(clone, add);

const  oldArr = ['10', 'dfffff', 'ffffffffssssss', '  '];
const newArr = oldArr.slice();

newArr[0] = "ddddd";

console.log(oldArr, newArr);


const video = ['youtube', 'tiktok', 'megogo'],
      blogs = ['bloggers', 'lifejournals'],
      internet = [...video, ...blogs,'facebook', 'vk'];

console.log(internet);

function log (a, b, c){
    console.log(a, b, c);
}

const num = [1, 2, 555];

log(...num);

const q = {
    one: 1,
    two: 2
};

const newQ = {...q};

console.log(newQ);

*/













 /*
 const arr = [1,8,3,4,5];

arr.sort(compareNum);
function compareNum(a, b){
    return a - b;
}
// arr[99] = 0;

 console.log(arr.length);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри масиива ${arr}`);
})

 arr.pop();
 arr.push(10);

 console.log(arr);

 for (let i = 0; i < arr.length; i++){
     console.log(arr[i]);
 }

 for (let value of arr){
     console.log(value);
 }


 const str = prompt ("", "");
 const products = str.split(", ");
 products.sort();
 console.log(products.join("; "));
*/











 /*
const options = {
    name: 'fffffffff',
    with: 1024,
    height: 1024,
    colors:{
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};

options.makeTest();
//Деструктуризація обєкту
const {border, bg} = options.colors;
console.log(border);

console.log(options.name);

delete options.name;

console.log(options);

let counter = 0;

for (let key in options){
    if (typeof(options[key]) == "object"){
        for ( let i in options[key]){
            console.log(`Свойство  ${i} имеет значение ${options[key][i]}`); 
            counter++;
        }
    } else{
        console.log(`Свойство  ${key} имеет значение ${options[key]}`); 
        counter++;
    }
}

console.log(counter);

console.log(Object.keys(options).length);


*/





 /*

 function first(){
     //Do something

     setTimeout(function(){
         console.log(1);
     }, 500);
 }

 function second(){
     console.log(2);
 }

 first();
 second();


 function learnJS(lang, callback){
     console.log(`я учу: ${lang}`);
     callback();
 }

 learnJS("JS", function(){
     console.log("я прошол этот урок");
 });
 */
 /*
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


     function detectPersonalLevel() {
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

 function showMyDB(hidden) {
     if (!hidden) {
         console.log(personalMovieDB);
     }
 }

 showMyDB(personalMovieDB.privat);

 function wrireYourGeners() {
     for (let i = 1; i <= 3; i++) {
         personalMovieDB.genres[i - 1] = prompt(`Напишите Ваш любимый жанр под номером: ${i}`);
     }
 }

 wrireYourGeners();
 */














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