import React, { Component } from 'react';
import './App.css';

import MainPage from './components/main-page/mainPage';
import Header from './components/header/header';

class MyApp extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default MyApp;
