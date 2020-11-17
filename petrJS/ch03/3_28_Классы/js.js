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
