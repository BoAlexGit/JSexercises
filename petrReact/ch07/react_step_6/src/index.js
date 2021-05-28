import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));


/*****************************************************************************/
// 60/18:00 Обработка ошибки
const getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        // eslint-disable-next-line no-template-curly-in-string
        throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    const some = await res.json();
    return some;
};
getResource('https://jsonplaceholder.typicode.com/todos/10000')
    .then((res) => console.log('Success',res));
getResource('https://jsonplaceholder.typicode.com/todos/8')
    .then((res) => console.log('SecondSuccess',res))
    .catch(error => console.error('Error!!!', error));




