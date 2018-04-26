import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';

import MainPage from './components/main-page/mainPage';
import Header from './components/header/header';
import CharacterCreation from './components/char-creation/char-creation';

class MyApp extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
         <Route exact path="/" component={Header} />
         <Route exact path="/" component={MainPage} />
         <Route exact path="/char-creation" component={CharacterCreation} />
        </div>
      </HashRouter>
    );
  }
}

export default MyApp;
