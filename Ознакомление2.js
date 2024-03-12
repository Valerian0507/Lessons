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

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);




console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10,6));

function calc(a, b) {
    return (a + b);
}



function ret() {
    let num = 50;

    // 

    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log("Hello");

}

logger();


const calc = (a, b) => {
    console.log('1');
    return a + b;
};