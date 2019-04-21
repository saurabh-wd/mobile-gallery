import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import {Cart} from './components/Cart';
import Default from './components/Default';
import Productlist from './components/Productlist';
import Details from './components/Details';
import Navbar from './components/Navbar';

const App = (props)=>{
  console.log('props',props);
  const someConditional = props.location.pathname === '/wrong-path';
  if (someConditional) {
      // push the new path to history to programmatically change your route
      props.history.push('/');
    }
    return (
      <React.Fragment>
      <Navbar/>
      <Switch>
          <Route exact path='/' component = {Productlist}/>
          <Route path='/Cart' component={Cart}/>
          <Route path='/Details' component = {Details}/>
          <Route path = '*' component = {Default}/>
        </Switch>
        
      </React.Fragment>
    );
  }


export const ShowTheLocationWithRouter = withRouter(App);
