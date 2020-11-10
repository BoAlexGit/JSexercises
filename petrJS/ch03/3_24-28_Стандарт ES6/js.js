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