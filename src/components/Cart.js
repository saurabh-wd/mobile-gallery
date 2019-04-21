import React from 'react';

export const Cart = (props)=>{
	//console.log("abc",props);
    const {location} = props;
	return(
	  <div>You are now at {location.pathname}</div>
	)
  }

