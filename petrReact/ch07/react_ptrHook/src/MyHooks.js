// MyHooks.js  react_ptrHook (см. 7.68  <K>Хуки в React )
import React, {useState} from 'react';

import './App.css';

// создадим простой hook
function MyHooks () {
    // создаём  массив переменных
    const [count, setCount] = useState(0); //может быть что угодно
    const [data, refreshData] = useState([{name:'Alex', sex: 'male'}]);
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