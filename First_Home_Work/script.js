'use strict';

var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");


var appData = {
    budget: money,
    timeData: time,
    expenses: {
        question_1: prompt("Введите обязательную статью расходов в этом месяце"),
        question_2: prompt("Во сколько обойдется?”")
    },
    optionalExpenses: {}, //объект с необязательными расходами - optionalExpenses 
    income: [], //массив данных с доп. доходом - income 
    savings: false //свойство savings 
};
console.log(appData.budget);
console.log(appData.timeData);
console.log("Ответ на первый вопрос:", appData.expenses.question_1);
console.log("Ответ на первый вопрос:", appData.expenses.question_2);

//Вариант подсчета:
var result = (appData.budget / 30) - appData.expenses.question_2;
console.log(result);

alert("Ваш бюджет на один день: " + result);