// Интерполяция

"use strict"
// 
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

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // Передает сслыку обьекта выше(передача по ссылке)

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);