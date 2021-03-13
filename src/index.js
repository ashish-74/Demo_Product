import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router,Route} from 'react-router-dom';
import Contact from './Contact';
import Product from './Product';
import Productdetails from './Productdetails';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <div>  
      <Route path="/" component={App}/>
      <Route path="/contact" component={Contact}/>
      <Route exact path="/product" component={Product}/>
      <Route path="/product/:name/:price/:desc" component={Productdetails}/> 
    </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
