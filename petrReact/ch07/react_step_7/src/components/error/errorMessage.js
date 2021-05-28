// React_step_7 - кнопка переключения случайного персонажа (см. 7.61)
// Обработка ошибок с сервера
import React from 'react';
import img from './error.jpg';
//import './error.css';

const ErrorMessage = () => {
    return (
        <>
            <img src={img}></img>
            <span>Something goes wrong :(</span>
        </>
    )
    
}
export default ErrorMessage;