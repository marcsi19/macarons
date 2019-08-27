import React from 'react';
import ReactDOM from 'react-dom';
import history from './history'
import { BrowserRouter as Router } from 'react-router-dom'
import App from "./app";

ReactDOM.render(
  <Router >
    <App />
  </Router>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
