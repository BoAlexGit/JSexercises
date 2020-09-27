//'use strict';

let money, time;

function start() {
    money = +window.prompt("Ваш бюджет на месяц?", "");
    time = window.prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +window.prompt ("Ваш бюджет на месяц?", ""); 
    }

}
start();
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = window.prompt ("Введите обязательную статью расходов в этом месяце", ""),
                b = window.prompt ("Во сколько обойдется?", "");
        
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        
                window.console.log ("done");
        
                appData.expenses[a] = b;
            } else {
                window.console.log ("bad result");
                i--;
            }
        
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        window.alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            window.console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            window.console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            window.console.log ("Это высокий уровень достатка!");
        } else {
            window.console.log ("Ошибочка...!");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +window.prompt("Какова сумма накоплений?"),
                percent = +window.prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                window.alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = window.prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            window.console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {

        let items = window.prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            window.console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(window.prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            window.alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }


};
// Для того чтобы функции работали (Птр этого не сделал, он вызывал каждую отдельно в консоли)
appData.chooseExpenses();
appData.detectDayBudget();
appData.detectLevel();
appData.checkSavings();
appData.chooseOptExpenses();
appData.chooseIncome();



for (let key in appData) {
    window.console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}

/******* Конструкторы и классы ******************************************/
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Вася");

alert(user.name); // Вася
alert(user.isAdmin); // false

/******* Классы ******************************************/
class User {

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }

}

// Использование:
let user = new User("Иван");
user.sayHi();