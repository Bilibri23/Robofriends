import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/searchBox';
import  './Apps.css';
import Scroll from '../components/Scroll';



class Apps extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],  //state are what changes yhe app or describes the app
			searchfield: ''
		}
	}

	//react has what we call lifecycle methods just like instance object lifecycle in java
	// thse methods get called automaticaly
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
		.then(users=>this.setState({robots:users}));
		
	}

	onSearchChange=(event)=>{ //always use arrow functions in react!
	//another rule of thumb is when u want to chaange sate do
		//this.setState() and not this.state.searchfield = ...
		this.setState({searchfield: event.target.value})
		
		
	}
	render(){
		const filteredRobots = this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})

		if(this.state.robots.length ===0){
			return <h1> Loading</h1>
		}
		else{
		return(
		<div className = 'tc'>
			 <h1>Robofriends</h1>
			 <SearchBox searchchange = {this.onSearchChange}/>
			 <Scroll>
			 <CardList robots = {filteredRobots}/> 
			 </Scroll>

	    </div>
		);
	//filterdrobots actuaalt changesstate and it can now be passed as a prop in the cardlist component
}
}
}
 export default Apps;

  //remember that u are returning a single parent element thus u need to encapsulate all these elements using div
 //returning our children componenets i.e including serachbox in the parent component apps/\
 // searchbox has to communicate with cardlist and vice versa , but react has a one way datat flow
 // for the two to communicate one will pass their state(info) to the parent node, and the other will retireve it from the parent
 //to do so react has wjat we call STATE
 //props are things that come out of state , a parent feeds sate into a child component, and as soon the parent receives the states,
 //it becomes a porperty