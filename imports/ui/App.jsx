import React from 'react';
import Header from './pages/Header.jsx';
import Viewer from './pages/Viewer.jsx';
import Uploader from './pages/Uploader.jsx';

import { Files } from '../api/files.js';

const App = class ComicAdd extends React.Component
{
	constructor(props)
	{
		super(props);
		this.props = props;

		// Meteor.setInterval(this.update, 1000);
	}

	componentDidMount()
	{
	}

	update ()
	{
		console.log ("update");
	}
	
	render()
	{
		return (
			<div>
				<Header/>
				{this.props.content}
			</div>
		);
	}
}

export default App;
