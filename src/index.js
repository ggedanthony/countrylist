import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';

//DEFINE THE ROOT
const root = document.querySelector("#root")

const pageComponent = <App/>
	
//RENDER COMPONENT
ReactDOM.render(pageComponent, root)