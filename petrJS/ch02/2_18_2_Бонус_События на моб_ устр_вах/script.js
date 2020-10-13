//<!--script.js-->
// события в мобильной версии
// touchstart - события возникновения касания к элементу(аналог клик сам клик
    // тоже будет работать, поэтому нужно смотреть чтобы они не пересекались)
// touchmove - нажали на экран и начинаем двигать 
// touchend - когда наш палец перестаёт соприкасаться с нашеё поверхностью
// touchenter - палец заходит на какой-то элемент на странице
// toucchleave - палец уходит с элемента
// touchcancel - когда точка(касание) больше не регистрируется в пределах браузера

window.addEventListener('DOMContentLoaded',function(){
	let box = document.querySelector('.box');
	//let box = document.getElementById('.box'),
	//btn = document.getElementsByTagName('button'),
	//circle = document.getElementsByClassName('circle'),
	//heart = document.querySelectorAll('.heart'),
	//oneHeart = document.querySelector('.heart');
	box.addEventListener('touchstart', function(e) {
		e.preventDefault();//чтобы избавиться от влияния браузера
		console.log("Red box: touchstart");
		console.log(e.target);
		console.log(e.touches[0].target);
		console.log(e.touches);
		console.log(e.changedTouches);
		console.log(e.targetTouches);
	});

	//box.addEventListener('touchmove', function(e) {
	//	e.preventDefault();//чтобы избавиться от влияния браузера
	//	console.log("Red box: touchmove");
	//});

	//box.addEventListener('touchend', function(e) {
	//	e.preventDefault();//чтобы избавиться от влияния браузера
	//	console.log("Red box: touchend");
	//});

	box.addEventListener('touchmove', function(e) {
		e.preventDefault();//чтобы избавиться от влияния браузера
		// координаты курсора (пальца)
		console.log("Red box: touchmove" + e.touches[0].pageX);
	});


	// первый вариант написания регулярного выражения
	 new RegExp('pattern','flags');
	// второй вариант намного проще
	//        /pattern/flags
// шаблон или pattern это то что мы хотим найти причём это любые символы

	// рассмотрим самые распространённые случаи
	let ans = prompt('Введите ваше имя');
	let reg = /n/;
	console.log(ans.search(reg)); // таким образом мы скажем JS что внутри вот этой строки
		// то что нам ответил пользователь, нужно искать наше регулярное выражение т.е. буковку 'n'
	let regFlag = /n/gi;
	// метод search слаб лучше использовать:
	console.log(ans.match(regFlag));// получаем массив свойств что круче
	// замена пароля на звёздочки
	let pass = prompt('Введите пароль');
	console.log(pass.replace(/./g, "*"));

	alert('12-34-56'.replace(/-/g,':'));

	console.log(reg.test(ans));

	// классы символов позволяют отсортировать по классам например только буквы

});