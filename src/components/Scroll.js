import React from 'react';

const Scroll =(props)=>{
	//in jsx the below is in camelcase not pascal(which is in css) the inerbraces which is specific to jsx returns an object which has css prps
	return(
		<div style ={{overflowY:'scroll', border:'7px solid black', height: '700px'}}>
		{props.children}
		</div>
		)
}

export default Scroll;