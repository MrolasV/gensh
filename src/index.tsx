import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from 'home/main';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter hashType="noslash">
    <Main />
  </HashRouter>,
  document.getElementById('root')
);
