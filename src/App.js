import React, { Component } from 'react';
import './App.css';

import MainPage from './components/main-page/mainPage';

class MyApp extends Component {
  render() {
    return (
      <div className="App">
        <MainPage/>
      </div>
    );
  }
}

export default MyApp;
