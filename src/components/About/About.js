import React, { Component } from 'react';
import Header from './../Header/Header';

class About extends Component {
  render() {
    return (
      <div className="container">
        <Header location={this.props.location} />
        <div className="about">
          <div className="about">
            Welcome to About
          </div>
        </div>
      </div>
    );
  }
}

export default About;
