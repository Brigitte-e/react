import React, { Component } from 'react';
import Header from './../Header/Header';
import './Login.scss';
import { validate } from './../../services/Validation';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    validate(this.state);
  }

  handleSubmit = event => {
    event.preventDefault();
    alert('email: ' + this.state.email + ' password: ' + this.state.password);
  }

  // handleSubmit(event) {
  //   alert('email: ' + this.state.email + ' password ' + this.state.password);
  // }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <input type="text" id='email'
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleChange} />
            <input type="password" id='password'
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleChange} />
            <button>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
