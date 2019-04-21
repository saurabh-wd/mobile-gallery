import React, { Component } from 'react';

export default class Default extends Component {
  render() {
  	console.log("default",this.props);
    return (
      <div>
        default
      </div>
    );
  }
}
