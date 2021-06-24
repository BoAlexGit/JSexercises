import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App, Clock} from './App';
import Button from './Button.js';
import MyHooks from './MyHooks.js';


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

class MyappHooks extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <MyHooks />
            </div>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
        <Myapp1 />
        <MyappHooks />
        </React.StrictMode>,
    document.getElementById('root')
);

