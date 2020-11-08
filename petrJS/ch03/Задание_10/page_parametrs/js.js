// animation js.js
let timerId1 = setInterval (sayHello, 5000);
function sayHello() {
    console.log('Hello Alex!!!');
}
 clearInterval (timerId1);
// необходимо применять рекурсивный вызов чем просто setInterval
let timerId2 = setTimeout(function log() {
    console.log("Самоповтор рекурсивной функции");
    console.log(xbox),
    console.log(ybox),
    console.log(width),
    console.log(height);
    setTimeout(log, 2000);
});

// создадим простую анимацию с перемещением квадратика 14:57
let btn = document.querySelector('.btn'),
elem = document.querySelector('.box');
// чтобы посмотреть размеры нашего box
let width = elem.clientWidth,
    height = elem.clientHeight,
    xbox = elem.getBoundingClientRect().top,
    ybox = elem.getBoundingClientRect().y;
    console.log(width);
    console.log(height);
    console.log(elem.getBoundingClientRect().bottom);
    console.log(elem.getBoundingClientRect());
    console.log(btn.getBoundingClientRect().top);
// чтобы посмотреть размеры нашей страницы
    console.log(document.documentElement.clientWidth);
    console.log(document.documentElement.offsetHeight);
    // можно эти методы использовать на любой странице в консоли
console.log(document.documentElement.scrollTop);
scrollBy(0,100); //переместится на 100пикселей
scrollTo(0, 200);// переместится в координаты 0, 200
function myAnimation(){
    let pos =0;
    let id = setInterval(frame, 10);
    function frame (){
        if (pos == 300){
            clearInterval(id);
        }else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }

}

btn.addEventListener('click', myAnimation);

// делегирование на определённую кнопку из общего блока
let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log("Это пример делегирования");
    }
});

// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
		// List item found!  Output the ID!
		console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
	}
});

// Get the parent DIV, add click listener...
document.getElementById("myDiv").addEventListener("click",function(e) {
	// e.target was the clicked element
  if (e.target && e.target.matches("a.classA")) {
    console.log("Anchor element clicked!");
	}
});