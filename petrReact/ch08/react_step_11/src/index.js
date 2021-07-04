// index.js  react_step_11 (см. 8.71 Соединяем React и Redux)
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import React from 'react'; 
import ReactDOM from 'react-dom';
import App from './components/app';
import './style.css';
// import {inc, dec, res} from "./actions";
// video-course 071/03:00
const store = createStore(reducer);

ReactDOM.render(
    <Provider store = {store}> 
        <App/>
    </Provider>
    , document.getElementById('root')
);
