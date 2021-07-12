// index.js  react_step_10r_r (см. 8.71 Соединяем React и Redux  )
import {createStore,bindActionCreators} from 'redux'; // очень важно импортировать эти функции из Redux
import counter from './reducer'; // вынесли в другой файл по законам react
//import {inc, res, dec, rdn} from "./actions"; // вынесли в другой файл по законам react
import * as actions from './actions';

const store = createStore(counter);
const {dispatch, subscribe} = store; //теперь можно убрать store. оставить dispatch()

// функция из пакета redux позволяет нам забиндить сразу несколько функций ввиде объекта
const {inc, dec, res, rdn} = bindActionCreators( actions, dispatch );//это уже обёрнутые функции
// не тоже что: import {inc, res, dec, rdn} from "./actions";

console.log('store.getState по умолчанию: ', store.getState());//посмотреть начальный store.getState
dispatch( {type: 'INC'} ); // просто запустим метод dispatch (как нажать "+3")
dispatch( {type: 'INC'} ); // просто запустим метод dispatch (как нажать "+3")
console.log('store.getState два раза action "INC": ', store.getState());//посмотреть store.getState

// подписка работает каждый раз как нажимается одна из кнопок (срабатывает f_ - метод dispatch)
subscribe( () => {console.log('store.subscribe(нажата : ', store.getState());})//посмотреть начальный store.getState

//  Проверяем нажатия кнопок
document.getElementById('inc').addEventListener('click', inc );
document.getElementById('dec').addEventListener('click', dec );
document.getElementById('res').addEventListener('click', res );
document.getElementById('rdn').addEventListener('click', () => {
    const value =  Math.floor(Math.random()*7);
    rdn(value);
});// video-course 071/14:20
//  функция обновляет counter т.е. прорисовывает новый state после кликанья
const update = () =>{
    document.getElementById('counter').textContent = store.getState();
};
// при каждом изменении
subscribe(update);

/***************** простой reducer, вообще без Store **********
// классическая функция reducer принимает на вход два оргумента
// state - состояние, action - действие которое мы хотим произвести с нашим сосотоянием
// внутри этой функции мы обрабатываем какой тип этого действия ('INC')  и мы его обрабатываем
// при помощи  if() а выше - switch () если что-то подподает под наши
// условия мы что-то производим с этим state и можем использовать много раз
// Заметим что Redux мы пока вообще не использовали
//const initialState = 0;
//const  reducer = (state, action) => {
  const  reducer = (state = 0, action) => { //если указать state = 0 (параметр по умолчанию)
    if (action.type === 'INC'){
        return state + 333;
    }
    return 0;
}

console.log('State0 = initialState: ',undefined);
//создадим state
//let state = reducer(initialState, {type: 'INC'}) // type обязательно д.б. строкой
// проверим в консоли что всё работает(f_reducer уже один раз выполнилась)
let state = reducer(undefined, {})

console.log('State1: ',state);
state = reducer(state, {type: 'INC'});
console.log('State2 после вызова функции reducer: ',state);
state = reducer(state, {type: 'INC'});
console.log('State3 после вызова функции reducer: ',state);
// функция reducer должна быть чистой функцией она должна зависеть от state
// (который в неё приходит) и от action и не иметь никаких побочных эффектов
// т.е. вот так делать нельзя (хотя тоже работает):
//              case 'RDN': // video-course 069/25:00
//              return state + Math.floor(Math.random()*7);
// чтобы не было рандомности нужно вынести это действие cм. выше и теперь наш
// reducer остаётся чистым потому что наша рандомная функция записана как аргумент
//             case 'RDN': // video-course 069/25:00
//             return state + action.value;

*/