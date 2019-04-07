import React, { Component } from 'react';
import StateContext from '../services/state-context';


export default class Product extends Component {
static contextType = StateContext;
  render() {
    return (
      <div>
        Product {this.context}
      </div>
    );
  }
}
