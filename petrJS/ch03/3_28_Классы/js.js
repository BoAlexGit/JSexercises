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

var Person1 = (function() {
    // Приватная функция
    let log = function(message) {
        console.log(message);
    };

    let Person2 = function(name) {
        // Публичное свойство
        this.name = name;
    };

    // Публичный метод
    Person.prototype.logger = function(message) {
        log('Public ' + message);
    };

    // Экспорт публичной функции
    return Person1, Person2;
})();
 /*************** Наследование *****************/
 // функция конструктор
var PersonNasl = function(name) {
    this.name = name + ' Doe';
}

// запись метода в прототип
PersonNasl.prototype.sayName = function() {
    console.log(this.name);
}

// Вызов конструктора родителя внутри дочернего
// конструктора для записи всех свойств
var GreatPersonNasl = function(name, phrase) {
    PersonNasl.apply(this, arguments);
    this.phrase = phrase;
}

// Перезапить прототипа дочернего конструктора
GreatPersonNasl.prototype = Object.create(PersonNasl.prototype);

GreatPersonNasl.prototype.sayPhrase = function() {
    console.log(this.name + ' says: "' + this.phrase + '"');
}

// создание нового объекта
var john = new PersonNasl('John');
var jane = new GreatPersonNasl('Jane', 'Hello, inheritance!');

john.sayName(); // John Doe
jane.sayName(); // Jane Doe
jane.sayPhrase(); // Jane Doe says: "Hello, World!"

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

// Примитивы
// Наш собственный конструктор
var PersonPrim = function(name) {
    this.name = name;
};

// Переназначение метода toString для всех объектов,
// созданных с помощью данного конструктора
PersonPrim.prototype.toString = function() {
    return 'PersonPrim ' + this.name;
};

var john = new PersonPrim('John');

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