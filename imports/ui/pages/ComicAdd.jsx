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
	
	onSubmit (e)
	{
	}
	
	render()
	{
		return (
			<div id="comic_add" className="comic_add">
				<form className="form">
					<div className="property">
						<label htmlFor="comic_name">Comic Name</label>
						<input type="text" id="comic_name" ref="comic_name" placeholder="type comic name"/>
					</div>
					<div className="property">
						<label htmlFor="comic_chapter">Chapter</label>
						<input type="number" id="comic_chapter" ref="comic_chapter" placeholder="1"/>
					</div>
					<div type="submit" className="submit" onClick={this.onSubmit.bind(this)}>Submit</div>
				</form>
			</div>
		);
	}
}