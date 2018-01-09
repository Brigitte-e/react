import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home/Home';

import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

render(
  <BrowserRouter  path="/" component={App}>
    <div>
      <Route path="/home" component={Home} />
    </div>
  </BrowserRouter>,

  document.getElementById('root')
)
