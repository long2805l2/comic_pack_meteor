import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Comic extends React.Component
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
			<div className="comic">
				<img className="thumb" src="/000.jpg"></img>
				<div className="info">
					<ul>
						<li><b>Name</b><span>Comic Name</span></li>
						<li><b>Name</b><span>Comic Name</span></li>
						<li><b>Name</b><span>Comic Name</span></li>
					</ul>
				</div>
				<div className="chapters_holder">
					<ul>
						<li><a href="#"><b>Chapter 1</b><span>Chapter 1 name</span></a></li>
						<li><a href="#"><b>Chapter 1</b><span>Chapter 1 name</span></a></li>
						<li><a href="#"><b>Chapter 1</b><span>Chapter 1 name</span></a></li>
						<li><a href="#"><b>Chapter 1</b><span>Chapter 1 name</span></a></li>
						<li><a href="#"><b>Chapter 1</b><span>Chapter 1 name</span></a></li>
						<li><a href="#"><b>Chapter 1</b><span>Chapter 1 name</span></a></li>
					</ul>
				</div>
			</div>
		);
	}
}