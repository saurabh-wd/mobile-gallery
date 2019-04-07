import React, { Component } from 'react';
import Product from './Product';
import StateContext from '../services/state-context';


export default class Productlist extends Component {
  render() {
    return (
      <StateContext.Provider value = {'saurabh'}>
        <Product/>
      </StateContext.Provider>
    );
  }
}
