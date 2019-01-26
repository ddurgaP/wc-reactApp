import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {CSVLink, CSVDownload} from 'react-csv';
 
 


class App extends Component {
  
  render() {
    const csvData =[
  ['firstname', 'lastname', 'email'] ,
  ['Ahmed', 'Tomi' , 'ah@smthing.co.com'] ,
  ['Raed', 'Labes' , 'rl@smthing.co.com'] ,
  ['Yezzi','Min l3b', 'ymin@cocococo.com']
];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. v1
          <CSVLink data={csvData} >Download me</CSVLink>
        </p>
      </div>
    );
  }
}

export default App;
