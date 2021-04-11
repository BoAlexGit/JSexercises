import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Clock} from './App';
import Button from './Button.js';
//import Clock from './App';
//import reportWebVitals from './reportWebVitals';

class Myapp1 extends React.Component {
  render() {
    return (
        <div className="wrapper">
            <Clock />
            <Button />
        </div>
    );
  }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
        <Myapp1 />
        </React.StrictMode>,
    document.getElementById('root')
);

/******************************** функциональны компоненты****************/
/* function Greet() {
    let phrase = "My phrase in variable"
    return(
        <div>
        <h2> Hello Alex in react1ptr/index.js!!!</h2>
        <h3> Hello {phrase}</h3>
        </div>
    )
};
// маленький компонент в REACT
function MyProperties(props) {

    return(
        <div>
            <h4> My {props.MyProperty} My name is {props.name}</h4>
            <h4> </h4>
        </div>
    )
};
// можно объеденить компоненты в одну конструкцию/вызов
// возьмём компонент и использовать его с разными параметрами
function GreetAll() {

    return(
        <div>
            <h4> <MyProperties MyProperty="Большая конструкция" name="Alex"/></h4>
            <h4> <MyProperties MyProperty="Большая конструкция" name="Ivan"/></h4>
            <h4> <MyProperties MyProperty="Большая конструкция" name="Kostja"/></h4>
        </div>
    )
};
// можно поместить функцию в const
const element =  <MyProperties MyProperty="Функция в const" name="Alex"/>

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Greet />
    <MyProperties MyProperty="Свойства в функции" name="Alex"/>
      {element}
    <GreetAll />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

 */
