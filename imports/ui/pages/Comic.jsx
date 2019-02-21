import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ComicAdd extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	componentDidMount()
	{
	}
	
	render()
	{
		return (
			<div>
				<div className="comic_info">
					<img className="comic_thumb" src="/000.jpg"></img>
					<h1 className="comic_name">comic name</h1>
				</div>
			</div>
		);
	}
}