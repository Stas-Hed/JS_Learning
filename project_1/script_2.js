'use strict';
//УСЛОВИЯ:

// if (2 * 5 == 10) {
//     console.log("Верно :)")
// } else {
//     console.log("Неверно :(")
// }

let num = 50;
if (num < 49) {
    console.log("Неверно!")
} else if (num > 100) {
    console.log("Много!")
} else {
    console.log("Верно!")
};

(num == 50) ? console.log("Верно"): console.log("Неверно");

switch (num) {
    case num < 49:
        console.log("Мало!");
        break;
    case num > 100:
        console.log("Много!");
        break;
    case 0:
        console.log("Равен 0");
        break;
    case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Что то не так :(");
        break;
}