import React from 'react';
//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alex Learn React
        </a>
      </header>
    </div>
  );
}
// подробное описание работы часов /home/alex/Desktop/VIDEO_Courses/JavaScript/[Udemy]
// [Иван Петриченко] Полный курс по JavaScript + React - с нуля до результата
//(2020)/05 Бонус. Дополнительные технологии/041 React 28:26
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerId = setInterval(
        () => this.tick(),
        1000
    )
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
        <div >
          <h4>Текущее время {this.state.date.toLocaleTimeString()}</h4>

        </div>
    )

  }

}

export {App, Clock} ;
/*************************************************************************/
