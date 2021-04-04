//import React, { Component } from 'react';
import React from 'react';
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
// ********************* приложение физтренеровки ************
function ShowBanner(props) {
  if (props.time > 45){
    return (
        <div className="rest_block" >Всё отдыхаем!</div>
    )
  } else {
    return (
        <div className="work_block">Время чего-нибудь сотворить!</div>
    )
  }
}


// ******************** часы *********************************
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
          <ShowBanner time={this.state.date.getSeconds()} />
          <h4>Текущее время {this.state.date.toLocaleTimeString()}</h4>

        </div>
    )

  }

}

export {App, Clock} ;
/*************************************************************************/

