// MyHooks.js  react_ptrHook (см. 7.68  <K>Хуки в React )
import React, {useState} from 'react';

import './App.css';

// создадим простой hook
function MyHooks () {
    // создаём  массив переменных
    const [count, setCount] = useState(0) //может быть что угодно
        return(
            <div>
                <h3>Простой пример с хуками</h3>
                <p>Вы кликнули {count} раз </p>
                <button onClick={() => setCount(count + 1)}> Кликни меня </button>
            </div>
        )
}

export default MyHooks ;