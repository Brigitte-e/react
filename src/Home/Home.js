import React, { Component } from 'react';
import logo from './../logo.svg';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Home Page</h1>
        </header>
      </div>
    );
  }
}

export default Home;
