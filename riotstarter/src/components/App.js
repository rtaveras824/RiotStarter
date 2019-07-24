import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';

import ResponsiveContainer from './ResponsiveContainer';

import Main from './events/Main';
import EventCreate from './events/EventCreate';
import EventShow from './events/EventShow';
import EventsList from './events/EventsList';
import LegendaryList from './events/LegendaryList';

class App extends Component {
	render() {
		return (
			<ResponsiveContainer>
			<div>
				<Router history={ history }>
					
					<Switch>
						<Route path="/" exact component={ Main } />
						<Route path="/events" exact component={ EventsList } />
						<Route path="/events/new" exact component={ EventCreate } />
						<Route path="/events/:id" exact component={ EventShow } />
						<Route path="/legendary" exact component={ LegendaryList } />
					</Switch>
					
				</Router>
			</div>
			</ResponsiveContainer>
		);
	}
}

export default App;