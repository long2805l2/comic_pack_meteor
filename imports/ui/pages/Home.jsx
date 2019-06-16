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
					<li><a href="/comic/add"><span className="add_comic">+</span>add comic</a></li>
					<li><a href="./comic/1"><img src="/001.jpg"></img>comic 1</a></li>
					<li><a href="/comic/2"><img src="/001.jpg"></img>comic 2</a></li>
					<li><a href="/comic/3"><img src="/001.jpg"></img>comic 3</a></li>
					<li><a href="/comic/4"><img src="/001.jpg"></img>comic 4</a></li>
					<li><a href="/comic/5"><img src="/001.jpg"></img>comic 5</a></li>
					<li><a href="/comic/6"><img src="/001.jpg"></img>comic 6</a></li>
					<li><a href="/comic/7"><img src="/001.jpg"></img>comic 7</a></li>
					<li><a href="/comic/8"><img src="/001.jpg"></img>comic 8</a></li>
					<li><a href="/comic/9"><img src="/001.jpg"></img>comic 9</a></li>
				</ul>
				<ul className="pages">
					<li><a href="/page/1">&lt;</a></li>
					<li><a href="/page/1">1</a></li>
					<li><a href="/page/2">2</a></li>
					<li><a href="/page/3">3</a></li>
					<li><a href="#">...</a></li>
					<li><a href="/page/256">256</a></li>
					<li><a href="/page/999">&gt;</a></li>
				</ul>
			</div>
		);
	}
}