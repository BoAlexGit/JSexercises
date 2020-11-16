//Интерполяция
let name = "Alex",
age = 30,
mail = 'ex@mail.ru';
// без интерполяции нужно "городить" вот такой огород:
window.document.write('User ' + name + ' ' + age + ' лет '+ "послать по " + mail + '.');
// с интерполяцией
window.document.write(`====> User ${name} ${age} лет. Послать его по ${mail}.`);
// ещё пример
let user = 'Кевин'; 
		console.log(`Привет, ${user}!`); // Привет, Кевин!

// Дерективы let и const
/*Синтаксис дерективы let 
let var1 [= value1] [, var2 [= value2]] [, ..., varN [= valueN]];

// Параметры
var1, var2, …, varN
//Имя переменной. Может использоваться любой допустимый идентификатор.
value1, value2, …, valueN
//Значение переменной. Любое допустимое выражение.*/
function varTest() {
	var xv = 12345;
	console.log(xv);
	if (true) {
	  var xv = 2;  // та же переменная! ошибка-'xv' is already defined. (W004)jshint(W004)
	  console.log(xv);  // 2
	}
	console.log(xv);  // 2
  }
  
  function letTest() {
	let xl = 1;
	if (true) {
	  let xl = 2;  // другая переменная
	  console.log(xl);  // 2
	}
	console.log(xl);  // 1
  }
  varTest();
  letTest();

  //Деректива  const
/*Значение констант не может быть изменено новым присваиванием, 
а также не может быть переопределено. Константы (const) подчиняются 
области видимости уровня блока так же, как переменные, объявленные 
с использованием ключевого слова let.

Синтаксис дерективы const 
const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]];
nameN
//Имя константы. Подчиняется тем же правилам, что и идентификаторы 
обычных переменных.
valueN
//Значение константы. Может быть любым из тех типов, 
которые могут быть для переменных, включая функцию.*/
// Примечание: Идентификаторы констант могут быть объявлены как в верхнем, 
// так и в нижнем регистре. Но правилом хорошего тона является использование 
// верхнего регистра.

// определим MY_FAV как константу и присвоим ей значение 7 
const MY_FAV = 7;

// данное присваивание выдаст ошибку - Uncaught TypeError: Assignment to constant variable.
//MY_FAV = 20;

// напечатает 7
console.log("my favorite number is: " + MY_FAV);

// попробуем переопределить константу, будет брошено исключение - Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
//const MY_FAV = 20;

// имя MY_FAV зарезервированно константой выше, данная операция 
// выкинет исключение
//var MY_FAV = 20;

// здесь также будет ошибка
//let MY_FAV = 20;

// Важно отметить свойства области видимости уровня блока
if (MY_FAV === 7) { 
    // Всё нормально. Создать константу или переменную MY_FAV можно. 
    // (работает так же как и let при объявлении в блоке переменных, которые не const)
    const MY_FAV = 20;

    // MY_FAV теперь 20
    console.log("my favorite number is " + MY_FAV);

    // это попадёт в глобальный контекст и выдаст ошибку
    //var MY_FAV = 20;
}

// MY_FAV все ещё имеет значение 7
console.log("my favorite number is " + MY_FAV);

// Выдаст ошибку, потому что константа не инициализирована - Uncaught SyntaxError: Missing initializer in const declaration
//const FOO; 

// const также работает с объектами
const MY_OBJECT = {"key": "value"};
console.log("my favorite object is " + MY_OBJECT);
// Попытка переопределить ссылку на объект вызовет исключение - Uncaught TypeError: Assignment to constant variable.
//MY_OBJECT = {"OTHER_KEY": "value"};

// но, свойства объекта (ключи) можно изменять
MY_OBJECT.key = "otherValue"; // Используйте Object.freeze() для того, чтобы сделать объект неизменяемым
console.log("my favorite object is " + MY_OBJECT);
// То же самое применимо к массивам
const MY_ARRAY = [];
// Например, можно добавлять элементы в массив
console.log("my favorite massive is " + MY_ARRAY);
MY_ARRAY.push("A"); // ["A"]
console.log("my favorite massive is " + MY_ARRAY);
// Но менять ссылку на объект массива нельзя. Это вызовет исключение - Uncaught TypeError: Assignment to constant variable
//MY_ARRAY = ["B"]

//<Эксперимент Ptr, чтобы понять разницу между var и  let
function makeArrayV() {
	var items = [];

	for(var i = 0; i < 10; i ++){
		var item = function() {
			console.log(i);
		};
		items.push(item);
	}
	return items;
}
var arr = makeArrayV();
arr[1](); // мы хотели получить 1  3  7 , а получили три десятки. Всё дело в том что 
arr[3](); // что когда мы объявили переменную "i" используя var, то она создалась одна на весь цикл
arr[7](); // т.е. когда наш цикл отработал десять раз вот эта переменная 10 и мы не сможем получить
		 // этих "контрольных точек" на каждой итерации цикла.
// что же будет если поменяем на let		 
function makeArrayL() {
	var items = [];

	for(let i = 0; i < 10; i ++){
		var item = function() {
			console.log(i);
		};
		items.push(item);
	}
	return items;
}
var arr = makeArrayL();
arr[1](); // мы хотели получить 1  3  7 , и получили желаемый результат 
arr[3](); // нужно обязательно иметь ввиду что переменная  var - глобальная 
arr[7](); // и она создаётся на весь цикл
		 //  кроме того она может мешать ещё где-нибудь
// получили желаемый результат  
		 
// Стрелочные функции
// Базовый синтаксис
/*(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
// эквивалентно: (param1, param2, …, paramN) => { return expression; }

// Круглые скобки не обязательны для единственного параметра:
(singleParam) => { statements }
singleParam => { statements }

// Функция без параметров нуждается в круглых скобках:
() => { statements }
() => expression 
// Эквивалентно: () => { return expression; }

// Стрелочные функции
// Расширенный синтаксис
// Когда возвращаете литеральное выражение объекта, заключите тело в скобки
params => ({foo: bar})

// Rest параметры и параметры по умолчанию поддерживаются
(param1, param2, ...rest) => { statements }
(param1 = defaultValue1, param2, …, paramN = defaultValueN) => { statements }

// Деструктуризация тоже поддерживается
var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f();  // 6
*/

// Стрелочные функции
// Короткие функции 
var elements = [
	'Hydrogen',
	'Helium',
	'Lithium',
	'Beryllium'
];
  console.log(elements);// наш массив

  console.log(
	  elements.map(function(element) {
			return element.length;
  		})
  	); // Это выражение вернет массив:(4) [8, 6, 7, 9]
  //0: 8
 // 1: 6
 // 2: 7
 // 3: 9
 // length: 4
 //_proto__: Array(0)
  
  // Функцию выше можно записать как стрелочную функцию:
   console.log(
	   elements.map((element) => {
			return element.length;
  	    })
    ); // (4) [8, 6, 7, 9]
  
  // Если единственным оператором в выражении стрелочной функции является return,
  // можно удалить return и окружающие фигурные скобки
  console.log(
		elements.map(element => element.length)
    );   // (4) [8, 6, 7, 9]
  
  // В данном случае, поскольку нам нужно только свойство length, мы можем использовать деструктуризированный параметр:
  // Обратите внимание, что строка `"length"` соответствует свойству, которое мы хотим получить,
  // в то время как `lengthFooBArX` это просто имя переменной, которую можно назвать как вы хотите
  console.log(
		elements.map(({ "length": lengthFooBArX }) => lengthFooBArX)
    ); // (4)[8, 6, 7, 9]
  
  // Это задание деструктуризированного параметра может быть записано, как показано ниже. Тем не менее, обратите внимание,
  // что нет строки `"length"`, чтобы выбрать, какое свойство мы хотим получить. Вместо этого в качестве свойства,
  // которое мы хотим извлечь из объекта, используется само литеральное имя переменной `length`
  console.log(
		elements.map(({ length }) => length)
  ); // (4)[8, 6, 7, 9]

  // Стрелочные функции
  //<Эксперимент Ptr: 
  // 1.своего контекста вызова стрелочная функция не имеет, внутри функции стрелки тот же this что и снаружи
  // 2.Функции анонимные(не можем задать имя) т.е. их можно вызвать приравняв к именной переменной(/поместив туда
  // 3.Поэтому не сможем управлять обработчиками событий и сделать рекурсию

  let funThis = () => {
	  console.log(this);
  };
  funThis();//т.к. она нигде не находится - просто в window и поэтому она контекст своего вызова имеет 
  //Window {window: Window, self: Window, document: document, name: "", location: Location, …}

  //но если мы поместим её в объект
  let obj = {
	  number: 5,
	  sayNumber: function() {
		  let say = () => {
			  console.log(this);
		    };
		  say();
	    }
	};
	obj.sayNumber();
	// то контекстом вызова будет js.js:248 {number: 5, sayNumber: ƒ} т.е. сам объект(2ой вариант см.про this)
	// т.е. поскольку у стрелочной функции нет котекста вызова она берёт его у своего родителя (obj.) поэтому
	// стр-функции удобно использовать в событиях

    // Обработчики событий
    // стрелочные функции удобно использовать в событиях
	let btn = document.querySelector('button');

	btn.addEventListener('click', function () {
		let show = () => {
			console.log(this);
		};
		show();
	});

// Отсутствие связывания с this
function Person() {
	// В конструкторе Person() `this` указывает на себя.
	this.age = 1;

	setInterval(function growUp() {
		// В нестрогом режиме, в функции growUp() `this` указывает
		// на глобальный объект, который отличается от `this`,
		// определяемом в конструкторе Person().
				this.age++;
				},
		50);
	console.log(this);
	//console.log(setInterval(5, 1000)); // не работает
}

var p = new Person();
console.log(p);
console.log(p);
console.log(p);
console.log(p);
console.log(this);

//В ECMAScript 3/5, данная проблема решалась присваиванием значения  this  переменной:
function Person1() {
	var that = this;
	that.age = 0;

	setInterval(function growUp() {
		// Функция с обратным вызовом(callback) содержит переменную that, которая
		// ссылается на требуемый объект this.
		that.age++;
	}, 100);
};
var p1 = new Person1();
console.log(p1);

/***********************************************************/
