import React, { Component } from 'react';
import './App.css';
import MainRouter from './route';
import Movie from './movie';



class App extends Component {
  render() {
    return (
      <div className="maindiv"><MainRouter /></div>
    );
  }
}

export default App;
