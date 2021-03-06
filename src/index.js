import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';

render(
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login}/>
    </div>
  </Router>,

  document.getElementById('root')
)

// https://github.com/ReactTraining/react-router/blob/25776d4dc89b8fb2f575884749766355992116b5/packages/react-router/docs/guides/migrating.md#the-router