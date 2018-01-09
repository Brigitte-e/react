import React, { Component } from 'react';
import logo from './../../assets/images/logo.svg';
import './Home.scss';
import Header from './../Header/Header';
import News from './../News/News';

class Home extends Component {
  render() {
    let my_news = [
      {
        title: 'News 1',
        text: 'Great News 1'
      },
      {
        title: 'News 2',
        text: 'Great News 2'
      },
      {
        title: 'News 3',
        text: 'Great News 3'
      },
    ];

    return (
      <div className="home">
        <Header />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Home Page</h1>
        </div>
        <News news={my_news} />
      </div>
    );
  }
}

export default Home;
