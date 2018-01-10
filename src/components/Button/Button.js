import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.setState(prevState => ({
    //   isToggleOn: !prevState.isToggleOn
    // }));
    //or
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  render() {
    return (
      <div className={'button ' + (this.state.isToggleOn ? 'active' : '')}>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default Button;
