import React, { Component } from 'react';
import logo from './../../assets/images/logo.svg';
import './Home.scss';
import Header from './../Header/Header';
import News from './../News/News';
import Button from './../Button/Button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

// shouldComponentUpdate - должен ли компонент обновиться? На самом деле, обычно реакт сам отлично разбирается. Но иногда ручное управление позволяет существенно ускорить работу в "узких местах". С этим методом нужно работать очень аккуратно.
// componentWillUpdate - вызывается прямо перед render, когда новые props и state получены. В этом методе нельзя вызывать setState.
// componentDidUpdate - вызывается сразу после render. Не вызывается в момент первого render'а компонента.
// componentWillUnmount - вызывается сразу перед тем, как компонент будет удален из DOM.
// componentWillMount - компонент будет примонтирован. В данный момент у нас нет возможности посмотреть DOM элементы.
// componentDidMount - компонент примонтировался.
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

  tick() {
    this.setState({
      date: new Date()
    });
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
      <div className="home">
        <Header />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Home Page</h1>
        </div>
         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <News news={my_news} />
        <Button />
      </div>
    );
  }
}

export default Home;
