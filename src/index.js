import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Sample from './Sample' 
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
    <ul>
        <li>
          <Link to="/">App</Link>
        </li>
        <li>
          <Link to="/sample">Sample</Link>
        </li>
      </ul>
      <Route exact path="/" component={App}/>
      <Route path="/sample" component={Sample}/>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
