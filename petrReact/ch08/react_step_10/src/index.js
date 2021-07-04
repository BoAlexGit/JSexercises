// app.js  react_step_10 (см. 8.69.3 Создаём приложение-счетчик Redux, но без React )
import {createStore} from 'redux'; // очень важно импортировать эту функцию для создания Store с Redux

// редюсер video-course 069/12:00
const counter = (state = 0, action) => {
    switch (action.type){ // действий м.б. много поэтому switch
        case 'INC':
            return state + 3;
        case 'DEC': // video-course 069/21:00
            return state - 3;
        case 'RES':
            return 0;
        case 'RDN': // video-course 069/25:00
            return state + action.value;
            //return 55555;
        default:
            return state;
    }
}
// пояснение video-course 069/18:23
//  создаем хранилище (логика(reducer) + данные-состояние(state) используя функцию createStore())
let store = createStore(counter); //video-course 069/14:51
console.log('store.getState: ', store.getState());//посмотреть начальный store.getState
store.dispatch( {type: 'INC'} ); // просто запустим метод dispatch (как нажать "+3")
store.dispatch( {type: 'INC'} ); // просто запустим метод dispatch (как нажать "+3")
console.log('store.getState: ', store.getState());//посмотретьstore.getState

// подписка работает каждый раз как нажимается одна из кнопок (срабатывает f_ - метод dispatch)
// video-course 069/17:42
store.subscribe( () => {console.log('store.subscribe(нажата : ', store.getState());})//посмотреть начальный store.getState
// Вспомогательные функции action-creator единственная цель создать новый объект ({type: 'INC'})
const inc = () => ( {type: 'INC'} );
const dec = () => ( {type: 'DEC'} );
const res = () => ( {type: 'RES'} );
//const rdn = () => ( {type: 'RDN'} );//можно и напрямую в DOM

//  Проверяем нажатия кнопок (стандартный DOM API)// video-course 069/21:18
document.getElementById('inc').addEventListener('click', () => {
    store.dispatch( inc() ); // метод dispatch нужен чтобы запустить counter (наш reducer) при нажатиии кнопки
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch( dec() );
});

document.getElementById('res').addEventListener('click', () => {
    store.dispatch( res() );
});

document.getElementById('rdn').addEventListener('click', () => {
    const value =  Math.floor(Math.random()*7);
    store.dispatch( {type: 'RDN', value} );
    //store.dispatch(rnd(value)); //если не напрямую // video-course 069/29:20
});

//  функция обновляет counter т.е. прорисовывает новый state после кликанья
const update = () =>{
    document.getElementById('counter').textContent = store.getState();
}

// при каждом изменении
store.subscribe(update);

/***************** простой reducer, вообще без Store **********/
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