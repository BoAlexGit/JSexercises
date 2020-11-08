// конструкторы и классы js.js
// функции-конструкоры (применяются до стандарта ES6)
function User(name,id,) {
    this.name = name;
    this.id = id;
    this.isAdmin = false;
    this.human = true;
    this.hello = function(){
        console.log('Почуствуйте разницу из-за просто скобок!' + this.name);
    };
    this.funcMy = function () {
        console.log('Мой метод funcMy для ' + this.name + " с идентификатором = " + id);
    }
  }
  // с помощью prototype мы можем добавлять новые свойства и методы
  User.prototype.exit = function() {
      console.log('Пользователь '  + this.name + " ушёл");
  }
  
  let user = new User("Вася",23,),// это объекты
      ivan = new User('Ivan',24),
      alex = new User('Alex',62);

  
  alert(user.name); // Вася
  alert(user.isAdmin); // false

  console.log(ivan);
  console.log(alex);
  console.log(ivan.hello());// почуствуйте разницу
  console.log(ivan.hello);
  console.log(alex.human, alex.hello());
  console.log(alex.hello);

  ivan.exit();

var y = "глобальная";
function constructFunction() {
    var y = "локальная";
    return new Function("return y"); // Не сохраняет локальный контекст!
}
// Следующая строка выведет слово "глобальная", потому что функция,
// созданная конструктором Function(), не использует локальный контекст.
// Если функция была определена как литерал,
// эта строка вывела бы слово "локальная".
alert(constructFunction()()); // Выводит слово "глобальная"
alert(User(ivan.funcMy(this.name,this.id))); // Выводит слово "глобальная"

/***********************************************************/
// в новом стандарте EC6 почти ничего не изменилось хоть и добавились классы и немного изменился синтаксис-
// стал красивее!
class UserClass {
    constructor() {
        this.name = name;
        this.id = id;
        this.isAdmin = false;
        this.human = true;
    }
    hello = function(){
        console.log('Почуствуйте разницу из-за просто скобок!' + this.name);
    };
    funcMy = function () {
        console.log('Мой метод funcMy для ' + this.name + " с идентификатором = " + id);
    }
}
// с помощью prototype мы можем добавлять новые свойства и методы
UserClass.prototype.exitClass = function() {
    console.log('Пользователь '  + this.name + " ушёл");
}

let vasjaClass = new UserClass("Вася",23,),// это объекты
    ivanClass = new UserClass('Ivan',24),
    alexClass = new UserClass('Alex',62);


alert(UserClass.name); // Вася
alert(UserClass.isAdmin); // false

console.log(ivanClass, vasjaClass);
console.log(alexClass);
console.log(ivanClass.hello());// почуствуйте разницу
console.log(ivanClass.hello);
console.log(alexClass.human, alexClass.hello());
console.log(alexClass.hello);

ivan.exitClass();