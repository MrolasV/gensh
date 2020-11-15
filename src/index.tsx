import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'fontsource-roboto';
import Main from 'home/main';
import Navigation from 'modules/navigation/navigation';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Navigation/>
    <Main/>
  </Router>,
  document.getElementById('root')
);
