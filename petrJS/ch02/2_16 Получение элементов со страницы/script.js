//<!--script.js-->
let box = document.getElementById('box'),
	btn = document.getElementsByTagName('button'),
	circle = document.getElementsByClassName('circle'),
	heart = document.querySelectorAll('.heart'),
	oneHeart = document.querySelector('.heart');

console.log(box); // вывод с id="box"
console.log(btn); // вывод с tagName=button (это псевдомассив)
console.log(btn[4]); // вывод с tagName=button1 (это элемент псевдомассива)
console.log(circle[2]);// вывод элемента псевдоколлекции
console.log(heart[1]); // самые пополярные методы
console.log(oneHeart);