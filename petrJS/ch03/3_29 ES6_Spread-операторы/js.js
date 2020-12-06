// 3.29.1 ES6 Spread  и rest операторы js.js
// Spread syntax (Синтаксис оператора разворачивания)
//( ...) он разворачивает массив или строку и превращает просто в набор каких-то данных.
function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

let video = ['babylon','smart123,','juris',"bimbo" ],
    blogs = ["WordPress",'livejournal', 'blogger'],
    allInternet = [video, blogs, "vk", 'facebook'], // чтобы вывод был не ввиде массива
allInternetSpread = [...video, ...blogs, "vk", 'facebook'];//а отдельными элементами из этих массивов

console.log(allInternet);
console.log(allInternetSpread);
// вывод:
//(4) [Array(4), Array(3), "vk", "facebook"]
//(9) ["babylon", "smart123,", "juris", "bimbo", "WordPress",
//"livejournal", "blogger", "vk", "facebook"]

// ещё очень важное применение в функциях
function alexPrime(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a+b+c);
}
let numbersF = [22,55,99];
alexPrime(numbersF);  //ничего не вышло

alexPrime(...numbersF);
// вывод
//3) [22, 55, 99]
// js.js:31 undefined  //ничего не вышло
// js.js:32 undefined  //ничего не вышло
// js.js:33 22,55,99undefinedundefined //ничего не вышло

// js.js:30 22
// js.js:31 55
// js.js:32 99
// js.js:33 176
/*
// синтаксис оператора rest
function f(a, b, ...theArgs) {
    // ...
}

function myFun(a,  b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]

// Только последний параметр может быть rest («параметром отдыха»).
//Может быть только один ... restParam.
foo(...one, ...wrong, ...wrong)
//Параметр rest должен быть последним аргументом.
foo(...wrong, arg2, arg3)
foo(arg1, arg2, ...correct)
//Параметр Rest можно деструктурировать Массивы (только для опытных пользователей :).
foo(arg1, ...[2,4,6])

 */