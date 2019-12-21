/*Здесь находиться
многострочный комментарий*/
//Это однострочный комментарий

//Типы переменных
console.log(leftBorderWidth);
var leftBorderWidth = 1;
let second = 2;
const pi = 3.14;

//Типы данных
var number = 7;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

//Объект-задается фигурными скобками:
var persone = {
    name: "John",
    age: 27,
    isMarried: true
};

//Вывод значений объекта осуществляется через: имяОбъекта-точка-элементОбъекта :
console.log(persone.name, persone.age);
console.log(persone["name"], persone["isMarried"]);

//Масив:
let arr = ["plum.png", "orange.jpg", "apple.bmp"]; //Масив
console.log(arr[2]); //Нумерация в масивах начинается с нуля(0)

//ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ:
//alert("Hello World!");
let answer = confirm("Are you here?");
console.log(answer);

let question = prompt("How old are you?", "18");
console.log(question);
console.log(typeof question); //С помощью typeof() можно узнать/вернуть тип данных

//ОПЕРАТОРЫ:
// console.log("arr" + "- object");
// console.log(4 + "- object");
console.log(2 + 5);

let incr = 10,
    decr = 10; //Вторая переменная заданная через запятую выше

incr++;
decr--;
console.log(incr); //Инкрементирование
console.log(decr); //Декриментирование
// console.log(++incr);//ПРЕинкрементирование
// console.log(--decr);
// console.log(incr++);//ПОСТинкрементирование
// console.log(decr--);
//console.log(5 % 2); //Вывод остатка от деления 5/2-остаток 1
// console.log("2" == 2);//Сравнение по значению (вернёт true)
// console.log("2" === 2);//Сравнение по типу данных (вернёт false)

//AND / OR / NOT(!):
let isChecked = true,
    isClose = true;
console.log(isChecked && isClose); //AND
console.log(isChecked || isClose); //OR
console.log(isChecked || !isClose);
/*NOT : изначально isClose=false, но так как впереди стоит знак отрицания, 
   то isClose стал равен true*/