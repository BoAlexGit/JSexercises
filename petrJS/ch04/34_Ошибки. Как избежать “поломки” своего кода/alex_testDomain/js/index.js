/******************** Работа с localStorage ****************************************************/
//window.localStorage.clear(); всё очистить
/* window.localStorage.setItem('myKey', 'myValue');
window.sessionStorage.setItem('mySessionKey' , 'mySession')

let localValue = localStorage.getItem('myKey');
console.log(localValue); //"myValue"

let sessionValue = sessionStorage.getItem('mySessionKey');
console.log(sessionValue); //"mySession"

localStorage.removeItem("myKey");
localStorage.clear();

 */
window.addEventListener("DOMContentLoaded", function () {
    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName("form")[0];
    if (localStorage.getItem("isChecked") === "tru") {
        checkbox.checked = true;
    };

    if (localStorage.getItem("bg") === "changed") {
        form.style.backgroundColor = "#FF4766"
    }

    checkbox.addEventListener("click", function () {
        localStorage.setItem("isChecked", true);
    });

    change.addEventListener('click', function () {
        localStorage.setItem('bg', 'changed');
    })
});
// сохранение объекта в localStorage
let persone = {
    name: "AlexK",
    age: 25,
    tech: ["mobile", "notebook", 'player']
    }
    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem("AlexK", serializedPersone);

    console.log(JSON.parse(localStorage.getItem("AlexK"))); //вывод объекта после обратного
                                                            // преобразования (parse)  из JSON