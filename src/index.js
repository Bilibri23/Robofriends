import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/Card';
import {robots} from './robots.js' //using a destructoring bcs  it is is not the regular export default(export one file only)
// incase u have another variable say carts u will insert it in the curly braces too
import 'tachyons';
import CardList from './components/CardList';
import Apps from './containers/Apps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Apps/>
  </React.StrictMode>
  //react strict mode iis used to find common bugs early in your components early during development
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// u see thta we have been copying and pasting code which is bad pratice
//remember the data flow in react which is from parent to children
// a solution will be to render the parent component cardlist instead of card
// we are going to change it to a general component called App

