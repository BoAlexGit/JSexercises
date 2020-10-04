//<!--2_17 Получение элементов со стр_ч2-->
//<!--script.js-->
let box = document.getElementById('box'),
	btn = document.getElementsByTagName('button'),
	circle = document.getElementsByClassName('circle'),
	heart = document.querySelectorAll('.heart'),
	oneHeart = document.querySelector('.heart'),
	myheart = document.querySelectorAll('.myheart'),
	oneMyheart = document.querySelectorAll('.myheart')
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
//}

myheart.forEach(function(item, i, hearts){
	item.style.backgroundColor = 'yellow';
});
// item - одно сердечко
// i номер сердечка в массиве (не обязательно если не используем)
// hearts - название массива  (не обязательно если не используем)

// ******* создание элемента ******
let div = document.createElement('div'),
	text = document.createTextNode('Тут был я');

//div.className. . . . устарел
div.classList.add('black');

document.body.appendChild(div);

console.log(div);


