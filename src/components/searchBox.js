import React from 'react';

const SearchBox = ({searchfield, searchchange}) =>{
	return (
		<div className ='pa2'>
			<input
			className ='pa3 ba b--green bg-lightest-blue'
			 type ='search' 
			 placeholder ='search robots'
			 onChange ={searchchange} // anytime the search box changes we call the function searchchange
			 //onChange event is an html listener property that listens to changes so as it is triggeres we call the func 
			  />
		</div>
		);
}

export default SearchBox;