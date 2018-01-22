import React, { Component } from 'react';
import logo from './../../assets/images/logo.svg';
import './Home.scss';
import Header from './../Header/Header';
import News from './../News/News';
import Button from './../Button/Button';
import Clock from './../Clock/Clock';
import { sayHello, test } from './../../services/Hello';
import NewsStore from './../../stores/NewsStore'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: NewsStore.getAll()
    }
  }

  componentWillMount() {
    NewsStore.on("change", () => {
      console.log('change');
      this.setState({
        news: NewsStore.getAll()
      })
    })
  }

  render() {

    return (
      <div className="container">
        { console.log('props', this.props) }
        <Header location={this.props.location} />
        <div className="home">
          <div className="App-header" onClick={test}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to My Home Page</h1>
          </div>
          <Clock />
          {sayHello()}
          <News news={this.state.news} />
          <Button />
        </div>
      </div>
    );
  }
}

export default Home;
