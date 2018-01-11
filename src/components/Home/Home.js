import React, { Component } from 'react';
import logo from './../../assets/images/logo.svg';
import './Home.scss';
import Header from './../Header/Header';
import News from './../News/News';
import Button from './../Button/Button';
import Clock from './../Clock/Clock';
import { sayHello, test } from './../../services/hello';

class Home extends Component {
  constructor(props) {
    super(props);
  }

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
      <div className="container">
        <Header />
        <div className="home">
          <div className="App-header" onClick={test}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to My Home Page</h1>
          </div>
          <Clock />
          {sayHello()}
          <News news={my_news} />
          <Button />
        </div>
      </div>
    );
  }
}

export default Home;
