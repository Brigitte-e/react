import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  // colorClass = '';
  // isActive = false;

  constructor(props) {
    super(props);
    // this.isActive = this.isActive.bind(this);
    // this.isActive = false;
    this.showMessage = this.showMessage.bind(this);
    // this.colorClass = this.colorClass.bind(this);
  }

  showMessage() {
    console.log('Clicked');
    // this.isActive = !this.isActive;
    // if(this.isActive)
    //   this.colorClass = this.colorClass.push('pink');
    //   console.log('this.colorClass',this.colorClass);
  }

  render() {
    return (
      // <div className={'button ' + this.colorClass}>
      <div className='button '>
        // {this.colorClass}here
        <button onClick={this.showMessage}>Click me</button>
      </div>
    );
  }
}

export default Button;
