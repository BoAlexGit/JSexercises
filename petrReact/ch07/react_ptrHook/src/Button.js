//import React, { Component } from 'react';
import React from 'react';
//import logo from './logo.svg';
import './App.css';

// создадим класс кнопки
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.myClick = this.myClick.bind(this);
    }
    myClick() {
        document.getElementsByClassName('wrapper') [0].style.backgroundColor = "#f9f5a5ee";
    }
    render(){
        return(
            <button onClick={this.myClick} className="clicker">Изменить дизайн</button>
        )
    }
}

export default Button ;
/***********************************************************************/
