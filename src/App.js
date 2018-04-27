import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import MainPage from './components/main-page/mainPage';
import Header from './components/header/header';
import CharacterCreation from './components/char-creation/char-creation';

class MyApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/char" component={CharacterCreation} />
        </div>
      </BrowserRouter>
    );
  }
}

export default MyApp;
