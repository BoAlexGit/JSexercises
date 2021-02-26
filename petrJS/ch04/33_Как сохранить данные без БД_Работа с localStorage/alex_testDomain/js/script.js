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