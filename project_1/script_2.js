'use strict';
//УСЛОВИЯ:

// if (2 * 5 == 10) {
//     console.log("Верно :)")
// } else {
//     console.log("Неверно :(")
// }

/*let num = 50;
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
*/

//ЦИКЛЫ

var num = 50;
//Цикл while - сначала проверяем, потом что то делаем
// while (num < 55) {
//     console.log(num);
//     num++;
// }

//Цикл do - сначала делаем что то, потом проверяем
do {
    console.log(num);
    num++;
}
while (num < 55);

//Цикл for
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// //Цикл for с остановкой после i=6
// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         break; //прерывание
//     }
//     console.log(i);
// }

//Цикл for с пррерыванием и продолжением i=6 будет пропущен
for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue; //продолжение после 6
    }
    console.log(i);
}