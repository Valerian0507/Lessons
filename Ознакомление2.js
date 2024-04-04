// Интерполяция

"use strict"






// Правила и типы названия переменных

// const vehicleBodyWidth = 5000,
    //   vehicleBodyLenght = 4000;

// console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ', длина:' + vehicleBodyLenght);

// ['adscd', 'daasd', 'dafsad'].map(a =>)

// Request
// data
// response

// snake_case
// UPPER_SNAKE_CASE
// Kebab-case
// PascalCase

// let COLORE_RED = '#F00';

// const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
// ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
// const _apiKey = 'apikey=d4eecb0c666edbfae4eab45d312fcldf';







// Разница между обьектами и массивами и неочевиддные синтаксические возможности

// const arr = ['a', 'b', 'c'];

// arr[10] = '3456';

// console.log(arr);

// const arrObj = {
//     a: 'a',
//     '1': 'b',
//     2: 'c',
//     abc: {
//         df: [{}, {}],
//         def: {

//         }
//     }
// };

// const b = 'b';

// arrObj.b = '1234';
// arrObj['b'] = '1234';

// console.log(arrObj['b']);
// console.log(arrObj.b);


// const obj = {a: 1, b: 2};

// const obj = {
//     'Anna': 500,
//     'Alice': 800
// };


// const category = 'toys';
// 
// console.log(`https://someurl.com/${category}/5`);
// 
// const user = "Ivan";
// 
// alert(`Привет, ${user}`);








// Операторы в JS

// 
// console.log('arr' + "- object");
// console.log(4 + + "5");
// 
// let incr = 10, 
    // decr = 10; 
// 
// ++incr;
// --decr;
// 
// console.log(++incr);
// console.log(--decr);
// 
// console.log(5%2);
// 
// console.log(2 + 2 * 2 !== '6');
// 
// const isChecked = false,
// isClose = false;
// 
// console.log(!isChecked || isClose);







// Работа с системой контроля версий Git и GitHub

// Условия
// if (1) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }



// if (num < 49) {
//     console.log('Errogr');
// } else if (num > 100) {
//     consolee.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.logs('Error');

// const num = '50';

// switch (num) {
//     case '48':
//         console.log('Неверно');
//         break;
//     case '100':
//         console.log('Неверно');
//         break;
//     case '50':
//         console.log('В точку');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }



// Циклы

// let num = 50;

// while (num <=55) {
    // console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <55);

// for (let i = 1; i < 10; i ++) {
    // if (i == 6) {
    // break;
    // continue;
    // }
// 
//     console.log(i);
// }





// Циклы в цикле и метки

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }


    // for (let i = 20; i > 0; i--) {
    //     console.log(i);
    //     if (i === 10) break;
    // }


    // for (let i = 2; i <= 10; i++) {
    //     if (i % 2 === 0) {
    //         console.log(i);
    //     }
    // }



    // let i = 2;
    // while (i <= 16) {
    //     if (i % 2 === 0) {
    //         i++;
    //         continue;
    //     } else {
    //         console.log(i);
    //     }
    //     i++;
    // }
    


// *
// **
// ***
// ****
// *****
// ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for(let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) { 
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }


// Функции

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello World!");
// console.log(num);




// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10,6));

// function calc(a, b) {
//     return (a + b);
// }



// function ret() {
//     let num = 50;



//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//     console.log("Hello");

// }

// logger();


// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };










// Методы и свойства строок и числе

// const str = "teSt";
// const arr = [1, 2, 4];

// console.log(str[2] = 'd');

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("q"));

// const logg = "Hello World";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

// const text = "12.2px";
// console.log(parseInt(text));
// console.log(parseFloat(text));











// Функции Callback

// function first() {
    // Do something
//     setTimeout(function() {
//         console.log(1);
//         }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);




// Обьекты, деструктуризация обьектов

// const options = {
    // name: 'test',
    // width: 1024,
    // height: 1024,
    // colors: {
        // border: 'black',
        // bg: 'red'
    // },
    // makeTest: function() {
        // console.log("Test");
    // }
// };
// 
// options.makeTest();
// 
// const {border, bg} = options.colors;
// console.log(border);

// Помогает узнать какое количество элементов содержиться в коде
// console.log(Object.keys(options).length); 

// console.log(options["colors"]["border"]);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options [key]) {
//             console.log(`Свойство ${i} имееет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имееет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);







// Массивы и псевдомассивы

// const arr = [2, 23, 16, 38, 210];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr[99] = 0
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
    // console.log(`${i}: ${item} внутри массива ${arr}`)
// });

// arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
// }

// for(let value of arr) {
    // console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));






// Передача по ссылке или по значению

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Передает сслыку обьекта выше(передача по ссылке)

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
    // let objCopy = {};

    // let key;
    // for (key in mainObj) {
        // objCopy[key] = mainObj[key];
    // }

    // return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
    // d: 17,
    // e: 20
// };

// const clone = (Object.assign({}, add));

// clone.d = 20;

// console.log(add);    
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'adasdasda';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'youkids'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

//     console.log(internet);

//     function log(a, b, c) {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }

//     const num = [2, 5, 7];
    
//     log(...num);

//     const array = ["a", "b", "c"];

//     const newAarray = [...array];

//     const q = {
//         one: 1,
//         two: 2
//     };

//     const newObj = {...q};





// Основы ООП, прототипно-ориентированное наследование

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };
// const john = Object.create(soldier);
// const john = {
    // health: 100
// };
// john.__proto__ = soldier;
// Object.setPrototypeOf(john, soldier);
// console.log(john.armor);
// john.sayHello();





// Отлавливаем ошибки в своем коде при помощи консоли разработчика Breakpoints



// function hello() {
//     console.log("Hello World");
//     debugger;
// }

// hello;

// function hi() {
//     console.log('Say hi!')
// }

// hi();

// const arr = [1, 14, 4, 30, 53],
//       sorted = arr.sort(compareNum);

// function compareNum(a, b) {
//     return a - b;
// }

// console.log(sorted);





// Динамическая типизация в JS

// To String

// 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// 2)
// console.log(typeof(null + ''));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// To Number

// 1)
// console.log(typeof(Number(4)));

// 2)
// console.log(typeof(+'5'));

// 3)
// console.log(typeof(parseInt("15px", 10)));


// let answ = +prompt("Hello", "");

// To Boolean

// 0, '', null, undefined, NaN;

// 1)
// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// 2)

// console.log(typeof(Number(4)));

// 3)
// console.log(typeof(!!"12345"));






// Задачи с собеседований на понимание основ

// 1)
// let x = 5; alert( x++ );? "В браузере покажет 5 если поставить ++ перед x то будет 6";

// 2)
// [ ] + false - null + true ?
// console.log(typeof([] + false - null + true)); "Nan или number";

// 3)
// let y = 1; 
// let x = y = 2; 
// alert(x);? "2"; 

// 4)
// [] + 1 + 2;?
// console.log([] +1 +2); "12";

// 5)
// alert( "1"[0] );? "1";

// 6)
// 2 && 1 && null && 0 && undefined ?
// console.log(2 && 1 && null && 0 && undefined);? 
// "И запинается на лжи";
// "ИЛИ запинается на правде";

// 7)
// !!( a && b ) и (a && b) ?
// console.log(!!( 1 && 2 ) === (1 && 2));

// 8)
// alert( null || 2 && 3 || 4 ); ? "3";
                //  
// alert( null || 2 && 3 || 4 ); ? "3";

// 9)
// a = [1, 2, 3]; b = [1, 2, 3];? "false";
// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log(a == b); 

// 10)
// alert( +"Infinity" ); ? "Infinity";

// 11)
// "Ёжик" > "яблоко"? "false";
// console.log("Ёжик" > "яблоко"); 

// 12)
// 0 || "" || 2 || undefined || true || falsе ? "2";
// console.log(0 || "" || 2 || undefined || true || falsе);







// Замыкание и лексическое окружение

// logNumber();debugger

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {debugger
//         counter = counter + 1;debugger
//         return counter;debugger
//     }

//     return myFunction;
// }
// debugger
// const increment = createCounter();debugger
// const c1 = increment();debugger
// const c2 = increment();debugger
// const c3 = increment();debugger

// console.log(c1,c2, c3);

// {
//     let msg = 'Hello';
// }

// console.log(msg);

// for (let i = 0; i < 9; i ++) {
//     for (let j = 0; j < 9; j ++) {
//         let num = 3;
//     }

//     console.log(num);
// }





// Test
// function firstTask() {
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.result; i++) {
//     result[i] = arr[i];
// }

// console.log(result);
// return result;
// }


// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.lenght; i++) {
    if(typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof(data[i]) === 'string') {
        data[i] = `${data[i]} - done`;
    }
}

console.log(data);
    return data;
}