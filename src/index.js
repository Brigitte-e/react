import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.scss';
import App from './App';
import Home from './components/Home/Home';
import About from './components/About/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

render(
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
    </div>
  </Router>,

  document.getElementById('root')
)
