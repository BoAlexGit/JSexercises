// react_step_8 - Жизненный цикл компонентов (см. 7.62-63)
// Обработка ошибок с сервера
// video-course 063/33:00 - 35:00
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