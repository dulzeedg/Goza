import React from 'react';
//import Component from 'react';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import { createBrowserHistory } from 'history';


const browserHistory = createBrowserHistory();

export default function App() {
  return (
        <Router history={browserHistory}>
          <Routes />
        </Router>    
    );
}