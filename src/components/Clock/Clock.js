import React, { Component } from 'react';

class Clock extends Component {
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
    return (
      <div className="clock">
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
