// Контекст вызова  this js.js
// Вызов контекста - четыре способа насильно првязать контекст вызова
//1. Просто вызов функции
console.log('1.Просто вызов функции');
function showThis(a, b){
    console.log(this);
    function sum() {
        console.log(this);
        return this.a + this.b;
    }
    console.log(sum());
}
showThis(4,5);
showThis(6,7);

//Метод объекта - this = объект
console.log('2.Метод объекта - this = объект');
let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shout() {
            console.log(this);
        }
        shout();//функция потеряла объект,т.к. она функция внутри функции
    }
};
obj.sum();

//Конструктор (new) - this = новый созданный объект
console.log('3.Конструктор (new) - this = новый созданный объект');
let user = {
    name: "John"
};
 
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
//Указание конкретного контекста при помощи - call, apply
console.log('4.1.Указание конкретного контекста при помощи - call, apply');
console.log(sayName.call(user, ' Smith'));//можно строку
console.log(sayName.apply(user, [' Snow', ' Bond' ] ));//можно массив

function count(number){
    return this * number;

}

//Указание конкретного контекста при помощи - bind очень часто применяется в REACT
console.log('4.2.Указание конкретного контекста при помощи - bind');
let double = count.bind(2);// привязываем к контексту вызова this "2"
console.log(double(4));
console.log(double(15));

//Указание конкретного контекста на примере кнопки
console.log('//Указание конкретного контекста на примере кнопки');
let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    console.log(this);//вывод <button class="btn">Контекст</button> т.е. ссылается
    //прямо на кнопку (объект)
    //это можно использовать - при нажатии перекраситься
    this.style.backgroundColor = 'red';
    // а вот функция в фунукции не сработает
    function showThis()
    {
        console.log(this);
    }
    showThis();
});