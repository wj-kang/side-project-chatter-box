import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthService from './services/auth_service';
import DbService from './services/db_service';
import App from './App';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';

// dependencies
const authService = new AuthService();
const dbService = new DbService();

ReactDOM.render(
  <Router>
    <App authService={authService} dbService={dbService} />
  </Router>,
  document.getElementById('root')
);
