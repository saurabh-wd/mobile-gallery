import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart';
import Default from './components/Default';
import Productlist from './components/Productlist';
import Details from './components/Details';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path='/' component = {Productlist}/>
        <Route path='/Cart' component={Cart}/>
        <Route path='/Details' component = {Details}/>
        <Route component = {Default}/>
      </Switch>
        
      </React.Fragment>
    );
  }
}

export default App;
