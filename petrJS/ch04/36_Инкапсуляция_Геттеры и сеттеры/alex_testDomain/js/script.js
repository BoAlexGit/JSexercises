/*  4.36. Инкапсуляция. Геттеры и сеттеры
Инкапсуляция является одним из ключевых понятий объектно-ориентированного программирования
По умолчанию все свойства объектов являются публичными, общедоступными,
и мы к ним можем обратиться из любого места программы.*/

function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age);
    };
};
let tom = new User("Том", 26);
console.log(tom.age);
tom.age=34;
console.log(tom.age);
console.log("Имя: " + tom.name + "; возраст: " + tom.age);

/*  Но мы можем их скрыть от доступа извне, сделав свойства локальными переменными:*/
function UserInc (name) {
    this.name = name;
    let _age = 16;
    this.displayInfo = function(){
        console.log("Имя: " + this.name + "; возраст: " + _age);
    };
    this.getAge = function() {
        return _age;
    }
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            _age = age;
        } else {
            console.log("Недопустимое значение " + "-->" + " осталось - " + _age);
        }
    }
}

let tomInc = new UserInc("Том");
console.log(tomInc._age); // undefined - _age - локальная переменная скрыта
console.log(tomInc.getAge()); // 16
tomInc.setAge(33);
console.log(tomInc.getAge()); // 33
tomInc.setAge("54"); // Недопустимое значение (не число) осталось - 33
tomInc.setAge(123); // Недопустимое значение (столько люди не живут) осталось - 33

tomInc.displayInfo(); // Имя: Том; возраст: 33
tomInc.setAge(62);
console.log(new UserInc(tomInc) + tomInc.getAge());// выведет [object Object]62

//UserInc.displayInfo(tomInc); // Uncaught TypeError: UserInc.displayInfo is not a function (она скрыта)

/************************************************************************************/

/*простой конвертер валют /home/alex/jsGit/petrJS/ch04/32_Задание 14 Калькулятор промисы на  примерах/alex_testDomain/js/script.js*/
let inputRub = document.getElementById('rub'),//п
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    // status
    // statusText
    // responseText / response
    // readyState
    
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) { //status
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
    });

});