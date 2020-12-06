// ES6 параметры Классы js.js
// эксперименты Ptr
class Rectangle {
    constructor(height = 7, width = 4) {
        this.height = height;
        this.width = width;
    }// ; не ставиться
    calcArea() {
        return this.height * this.width;
    }
}
// теперь мы можем наплодить квадратиков сколько нам нужно
// так можно поступить с чем угодно используя классы (прототипы)
  const square = new Rectangle(12,12);
  const squareMy = new Rectangle(15,15);
  const squareMyWp = new Rectangle();
  console.log("площадь квадратиков: - ", square.calcArea(), " мой квадратик -", squareMy.calcArea(), "с параметрами по умолчанию -", squareMyWp.calcArea());
  // Инкапсуляция
// Инкапсуляция есть ни что иное, как реализация приватности. В JavaScript подобная концепция реализуется благодаря функциям и их областям видимости.
// Функция конструктор
 const Person = function(name) {
    // Приватная функция
    let log = function(message) {
        console.log(message);
    };

    // Публичное свойство
    this.name = name;
console.log(Person(name));
    // Публичный метод
    this.logger = function(message) {
        log('Public ' + message);
    };
};

var Peron = (function() {
    // Приватная функция
    var log = function(message) {
        console.log(message);
    };

    var Person = function(name) {
        // Публичное свойство
        this.name = name;
    };

    // Публичный метод
    Person.prototype.logger = function(message) {
        log('Public ' + message);
    };

    // Экспорт публичной функции
    return Person;
})();

    // Экспорт публичной функции
    return Person1, Person2;
})();

/***************************************************/
//Наследование
// функция конструктор
var Person = function(name) {
    this.name = name + ' Doe';
};

// запись метода в прототип
Person.prototype.sayName = function() {
    console.log(this.name);
};

// Вызов конструктора родителя внутри дочернего
// конструктора для записи всех свойств
var GreatPerson = function(name, phrase) {
    Person.apply(this, arguments);
    this.phrase = phrase;
};

// Перезапить прототипа дочернего конструктора
GreatPerson.prototype = Object.create(Person.prototype);

GreatPerson.prototype.sayPhrase = function() {
    console.log(this.name + ' says: "' + this.phrase + '"');
};

// создание нового объекта
var john = new Person('John');
var jane = new GreatPerson('Jane', 'Hello, World!');

john.sayName(); // John Doe
jane.sayName(); // Jane Doe
jane.sayPhrase(); // Jane Doe says: "Hello, World!"

// сказка про попугаев
// Дед попугай с двумя лапами
var ParrotGrandfather = function() {};
ParrotGrandfather.prototype = {
    species: 'Parrot',
    paws: 2
};

// Отец попугай унаследовал всё у деда
var ParrotFather = function() {};
ParrotFather.prototype = Object.create(ParrotGrandfather.prototype);

// Сын попугай унаследовал всё у отца
var ParrotSon = function() {};
ParrotSon.prototype = Object.create(ParrotFather.prototype);

var grandfather = new ParrotGrandfather();
var father = new ParrotFather()
var son = new ParrotSon();

console.log(grandfather.species, father.species, son.species);
// Parrot Parrot Parrot - все попугаи!
console.log(grandfather.paws, father.paws, son.paws);
// 2 2 2 - у каждого по 2 лапы

// Дед меняет количество лап
ParrotGrandfather.prototype.paws++;
console.log(grandfather.paws, father.paws, son.paws);
// 3 3 3 - у каждого теперь по 3 лапы

// Отец меняет вид
ParrotFather.prototype.species = 'eagle';
console.log(grandfather.species, father.species, son.species);
// Parrot eagle eagle - дед остался попугаем, отец и сын стали орлами

// Сын уменьшил количество лап
ParrotSon.prototype.paws--;
console.log(grandfather.paws, father.paws, son.paws);
// 3 3 2 - дед и отец остались при своих трёх лапах

// Дед решил стать чайкой
ParrotGrandfather.prototype.species = 'seagull';
console.log(grandfather.species, father.species, son.species);
// seagull eagle eagle - дед чайка, отец и сын орлы

/*******************************************************/
// Полиморфизм
// Наш собственный конструктор
var Person = function(name) {
    this.name = name;
};

// Переназначение метода toString для всех объектов,
// созданных с помощью данного конструктора
Person.prototype.toString = function() {
    return 'Person ' + this.name;
};

var john = new Person('John');

// Два массива, второй абсолютно обычный,
// для первого переназначен метод toString
var arr1 = [4, 2];
var arr2 = [5, 3];
arr1.toString = function() {
    return 'Array ' + this.reduce(function(result, item) {
        return result + '' + item;
    });
};

// В итоге
console.log(john.toString()); // Person John
console.log(arr1.toString()); // Array 42
console.log(arr2.toString()); // 5,3

/**************************************************/
// классы
class Person {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`Person ${this.name} said his name`);
    }
}

const john = new Person('John');
john.sayName(); // Person John said his name
Пример выше можно записать в стиле ES5 следующим образом:

    var Person = function(name) {
        this.name = name;
    };

Person.prototype.sayName = function() {
    console.log('Person ' + this.name + ' said his name');
};

var john = new Person('John');
john.sayName(); // Person John said his name

//extends
//ES6 классы также обладают синтаксическим сахаром для реализации прототипного наследования.
//Для подобных целей используется extends:
class GreatPerson extends Person {
    constructor(name, phrase) {
        super(name);
        this.phrase = phrase;
    }
    sayPhrase() {
        console.log(`${this.name} says: "${this.phrase}"`)
    }
}

const jane = new Person('Jane', 'Hello, World!');
jane.sayName(); // Person Jane said his name
jane.sayPhrase(); // Jane says: "Hello, World!"

const jane = new Person('Jane', 'Hello, World!');
jane.sayName(); // Person Jane said his name
jane.sayPhrase(); // Jane says: "Hello, World!"

/* Объявление класса
Первый способ определения класса — class declaration (объявление класса).
 Для этого необходимо воспользоваться ключевым словом class и указать имя класса
 (в примере — «Rectangle»).*/
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
// безымянный
var Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle.name);
// отобразится: "Rectangle"

// именованный
var Rectangle = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
console.log(Rectangle.name);
// отобразится: "Rectangle2"
//Обратите внимание: выражения класса подвержены тем же проблемам с подъёмом (hoisting),
// что и объявления класса.
// ключевое слово super
class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} издает звук.`);
    }
}

class Lion extends Cat {
    speak() {
        super.speak();
        console.log(`${this.name} рычит.`);
    }
}

let l = new Lion('Фаззи');
l.speak();
// Фаззи издает звук.
// Фаззи рычит.


//mix-ins
var calculatorMixin = Base => class extends Base {
    calc() { }
};

var randomizerMixin = Base => class extends Base {
    randomize() { }
};
// Класс, использующий такие mix-ins, можно описать следующим образом:
    class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

// species
class MyArray extends Array {
    // Изменить species на родительский конструктор Array
    static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1,2,3);
var mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true

//static
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static displayName = "Точка";
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; //undefined
p1.distance;    //undefined
p2.displayName; //undefined
p2.distance;    //undefined

console.log(Point.displayName);      // "Точка"
console.log(Point.distance(p1, p2)); // 7.0710678118654755

// методы
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100

