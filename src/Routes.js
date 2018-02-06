import React from 'react';
import {BrowserRouter, Router} from 'react-router-dom'; 
import Header from './Header';
import './App.less';

const Routes = () => (
	<BrowserRouter>
		<div className="App">
			<Header/>
			<main>
				{/* <Route path="/" exact component={Home} /> */}
				{/* <Route path="/login" exact component={Login} />
				<Route path="/contact" component={Contact} /> */}
			</main>
		</div>
	</BrowserRouter>
);

export default Routes;