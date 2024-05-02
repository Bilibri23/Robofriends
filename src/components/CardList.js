import React from 'react'
import Card from './Card';

const CardList =({robots})=>{
	return(
		<div>
		{
	         robots.map((user, i) =>{
			   return(  
					<Card 
		    key ={i}
			id ={robots[i].id} 
		    name = {robots[i].name } 
		    email = {robots[i].email}
		    />
		    );
			})
	     }
	     </div>
	     );
}
// each user  in the cards should have an id , such if one is deleted rwact will know which one, thus take it 
//as good practice to insert an id in the loops
export default CardList;