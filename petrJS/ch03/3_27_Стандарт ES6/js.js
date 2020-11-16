// ES6 параметры по умолчанию js.js
function calcOrDouble(number, basis) {
    basis = basis || 2; //так странно делали до ES6 в ES5
    console.log(number*basis);
};
calcOrDouble(7,9); //63
calcOrDouble(5); //10 просто удвоилось

// В ES6 параметры по умолчанию можно записывать прямо при объявлении функции

function calcOrDoubleES6(numberES6 = 2, basisES6 = 2) {
    console.log(numberES6*basisES6);
};
calcOrDoubleES6();
calcOrDoubleES6(7,7);
calcOrDoubleES6(5);
calcOrDoubleES6(null,7);
calcOrDoubleES6(undefined, 148);

console.log('Вызов функции кнопкой');
let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    console.log(calcOrDoubleES6(45, 1005));//вывод 42225
    //это можно использовать - при нажатии перекрасить кнопку/что-нибудь
    this.style.backgroundColor = 'red';
    // а вот функция в фунукции
    function calcThis()
    {
        console.log(calcOrDoubleES6(700, 800));//вывод 560000
    }
    calcThis();
});