import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Home extends React.Component
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
			<div className="home">
				<ul className="comics">
					<li><a href="./comic/add"><span className="add_comic">+</span>add comic</a></li>
					<li><a href="#"><img src="/001.jpg"></img>comic 1</a></li>
					<li><a href="#"><img src="/001.jpg"></img>comic 2</a></li>
					<li><a href="#"><img src="/001.jpg"></img>comic 3</a></li>
					<li><a href="#"><img src="/001.jpg"></img>comic 4</a></li>
					<li><a href="#"><img src="/001.jpg"></img>comic 5</a></li>
					<li><a href="#"><img src="/001.jpg"></img>comic 6</a></li>
					<li><a href="#"><img src="/001.jpg"></img>comic 7</a></li>
					<li><a href="#"><img src="/001.jpg"></img>comic 8</a></li>
					<li><a href="#"><img src="/001.jpg"></img>comic 9</a></li>
				</ul>
				<ul className="pages">
					<li><a href="#">&lt;</a></li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">...</a></li>
					<li><a href="#">256</a></li>
					<li><a href="#">&gt;</a></li>
				</ul>
			</div>
		);
	}
}