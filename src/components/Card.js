import React from 'react';

const Card =(props) =>{
	const {name, email} = props;
	return(
		 //default tachyons css props
		<div className =' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		   <img alt ='robots' src = 'https://robohash.org/test?200x200' />
	       <div>

	          <h2> {name}</h2> 
	          <p> {email} </p>
            </div>
        </div>
        //expressions or properties are enclosed in curly braces just like in  jsx
    );
}

export default Card;