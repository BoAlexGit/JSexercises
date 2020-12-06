// 3.29. Задание 12. Работаем с проектом и практикуемся использовать ES6

class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createDiv() {
		let elem = document.createElement('div');
		document.body.appendChild(elem);
		let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
		elem.style.cssText = param;
	}
}

class Images {
	constructor(image) {
		this.image = image;
	}
	createDiv() {
		let elem = document.cr;
		document.body.appendChild(elem);
	}

}

const item1 = new Options(100, 350, "white", 14, "center");
const item2 = new Options(100, 350, "red", 14, "center");
const item3 = new Options(100, 350, "white", 14, "center");
const coatOfArmsChase = new Images("/img/ourGerb.png");
item1.createDiv();
item2.createDiv();
item3.createDiv();
coatOfArmsChase.createDiv();

/********************************************/
window.addEventListener('DOMContentLoaded', function() {

	'use strict';
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');

	function hello() {
		name = this.name;
		console.log(this.name);
	}
	hello();

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for(let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}

	});

	// Timer

	let deadline = '2018-11-21';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t/1000) % 60),
			minutes = Math.floor((t/1000/60) % 60),
			hours = Math.floor((t/(1000*60*60)));

		return {
			'total' : t,
			'hours' : hours,
			'minutes' : minutes,
			'seconds' : seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(updateClock, 1000);

		function updateClock() {
			let t = getTimeRemaining(endtime);

			function addZero(num){
				if(num <= 9) {
					return '0' + num;
				} else return num;
			};

			hours.textContent = addZero(t.hours);
			minutes.textContent = addZero(t.minutes);
			seconds.textContent = addZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}

	}

	setClock('timer', deadline);

	// Modal
// получить элементы со страницы
	let more = document.querySelector('.more'),// кнопка
		overlay = document.querySelector('.overlay'),// само модальное окно
		close = document.querySelector('.popup-close');// кнопка крестик-закрытие

	more.addEventListener('click', function() {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';// чтобы не листались страницы
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

});