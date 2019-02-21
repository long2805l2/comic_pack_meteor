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
		const comic = {
			name: ReactDOM.findDOMNode(this.refs.comic_name).value.trim(),
			author: ReactDOM.findDOMNode(this.refs.comic_author).value.trim(),
			genres: ReactDOM.findDOMNode(this.refs.comic_genres).value.trim(),
			tags: ReactDOM.findDOMNode(this.refs.comic_tags).value.trim(),
			introduction: ReactDOM.findDOMNode(this.refs.comic_introduction).value.trim()
		};

		Meteor.call('comics.add', comic);
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
						<label htmlFor="comic_author">Author</label>
						<input type="text" id="comic_author" ref="comic_author" placeholder="who draw this"/>
					</div>
					<div className="property">
						<label htmlFor="comic_genres">Genres</label>
						<input type="text" id="comic_genres" ref="comic_genres" placeholder=""/>
					</div>
					<div className="property">
						<label htmlFor="comic_tags">Tags</label>
						<input type="text" id="comic_tags" ref="comic_tags" placeholder=""/>
					</div>
					<div className="property">
						<label htmlFor="comic_introduction">Introduction</label>
						<textarea id="comic_introduction" ref="comic_introduction" placeholder="" rows="4"></textarea>
					</div>
					<div type="submit" className="submit" onClick={this.onSubmit.bind(this)}>Submit</div>
				</form>
			</div>
		);
	}
}