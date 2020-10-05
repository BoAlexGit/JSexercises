//<!--2_17 Получение элементов со стр_ч2-->
//<!--script.js-->
let box = document.getElementById('box'),
	btn = document.getElementsByTagName('button'),
	circle = document.getElementsByClassName('circle'),
	heart = document.querySelectorAll('.heart'),
	oneHeart = document.querySelector('.heart'),
	myheart = document.querySelectorAll('.myheart'),
	oneMyheart = document.querySelectorAll('.myheart'),
	wrapper = document.querySelector('.wrapper');

// ***** изменение стилей ******
box.style.backgroundColor = 'green';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

for (let i=0; i < heart.length; i++) {
	heart[i].style.backgroundColor = 'blue';
	heart[i].style.borderRadius = '40%';
}

//for (let i=0; i < myheart.length; i++) {
//	myheart[i].style.backgroundColor = 'yellow';
//};

myheart.forEach(function(item, i, hearts){
	item.style.backgroundColor = 'yellow';
});
// item - одно сердечко
// i номер сердечка в массиве (не обязательно если не используем)
// hearts - название массива  (не обязательно если не используем)

// ******* создание элемента ******
let div = document.createElement('div'),
	text = document.createTextNode('Тут был я'),
	myDiv = document.createElement('myDiv'),
	myTegDiv = document.createElement('myTegDiv');

//div.className. . . . устарел
div.classList.add('black');
myDiv.classList.add('myBlack');
myTegDiv.classList.add('myTegBlack');

div.innerHTML = '<h3>"Это мой Div</h3>';
myDiv.innerHTML = 'Текст myDiv';
myTegDiv.innerHTML = text;
// чтобы обезопасить занесение текста лучше пользоваться другим методам,
// который позволит написать только текст
div.textContent = '<h3>"Это тоже мой Div</h3>';
// чтобы увидеть работу всех методов нужно запустить по шагам
// ибо код выполняется сверху вниз поэтому результатом будет 
// выполнение последнего метода(промежуточных действий не увидишь)

wrapper.appendChild(div);// вставить в конец элемента wrapper
document.body.insertBefore(div,circle[0]);

document.body.removeChild(circle[1]);

document.body.insertBefore(myTegDiv,heart[1]); // вставить в конец body

document.body.replaceChild(btn[5],heart[2]);
wrapper.replaceChild(btn[5], myheart[1]);

wrapper.insertBefore(myDiv,myheart[0]);

console.log(div);


