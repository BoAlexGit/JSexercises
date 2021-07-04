// MyHooks.js  react_ptrHook (см. 7.68  <K>Хуки в React )
//import React, {useState, useEffect} from 'react';
import React, {useState} from 'react';
import './App.css';

// создадим простой hook
function MyHooks () {
    // создаём  массив переменных
    const [count, setCount] = useState(0); //может быть что угодно
    const [data, refreshData] = useState([{name:'Alex', sex: 'male'}]);
/***********************************************************************************
    useEffect(() => {
        updateChar();
        let timerId = setInterval(updateChar, 15000);
        return () => {
            clearInterval(timerId);
        }
    });

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 15000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }
/*************************************************************************************/
         return(
            <div>
                <h3>Простой пример с хуками</h3>
                <p>Вы кликнули {count} раз </p>
                <button
                    onClick={() => setCount(count + 1)}>
                    Кликни меня
                </button>
                {data.map(item => {
                    return (// key={item.id} обязательно поставить ключ на внешний элемент
                       <div key={item.id} ak2021 >Name: {item.name}, sex: {item.sex}</div>
                    );
                })}
                <button
                onClick={() => refreshData(data =>([...data, {name: 'Katerina', sex: 'girl'}]))}>
                   Добавить данные
                </button>
            </div>
        );

}

export default MyHooks ;

/*
/***********7.68.7 Рефакторинг приложения "Игра престолов"***********************
import React, {useState, useEffect} from 'react';
import './itemList.css';
import Spinner from '../spinner';
// классовый компонент поменяем на функцию
function ItemList ({getData, onItemSelected, renderItem}) {
  const [itemList, updateList] = useState([]); //state для функционального компонента

  useEffect(() => {
        getData()
            .then( (data) => {
                updateList(data)
            })
// наш компонент пытается обновится посредством запросов
// см.7.63.2 hooks - жизненные циклы https://ru.reactjs.org/docs/react-component.html#componentdidupdate
  },[])// чтобы заменить componentDidUpdate() {. . .} помещаем после запятой пустой массив [], который говорит что
    // ээффект нужно перерисовывать только при появлении компонента и его исчезновении
// второй аргумент здесь сработает если в скобках примитив(число, строка, булёвое значение) а так должен быть просто пустой
    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;

            const label = renderItem(item);// this.props не нужен

            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={ () => onItemSelected(id)/*this.props не нужен}>
                    {label}
                </li>
            )
        })
    }
// метод render()
   //const {itemList} = this.state;// у нас итак itemList содержит текущий state
   if (!itemList) {
        return <Spinner/>
        }
        const items = renderItems(itemList); //здесь лежит та вёрстка с теми списками
        //которые мне необходимо разместить на странице


        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );

}
export default  ItemList;

*/