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
				<div className="thumb"><img src="/000.jpg"></img></div>
				<div className="info">
					<ul>
						<li><b>Name</b><span>Comic Name</span></li>
						<li><b>Name</b><span>Comic Name</span></li>
						<li><b>Name</b><span>Comic Name</span></li>
					</ul>
				</div>
				<div className="chapters_holder">
					<span className="chapter_id header">Chapter</span><span className="chapter_name header">Name</span><span className="chapter_update header">Update</span>
					<span className="chapter_id">Chapter 1</span><a href="#" className="chapter_name">The Boy Who's a Girl</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 2</span><a href="#" className="chapter_name">The Wandering Son Wanders On</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 3</span><a href="#" className="chapter_name">Oscar and André</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 4</span><a href="#" className="chapter_name">Wandering Daughter</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 5</span><a href="#" className="chapter_name">Nitori-kun's Birthday</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 6</span><a href="#" className="chapter_name">Friends and Their Words</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 7</span><a href="#" className="chapter_name">Takatsuki-san's Calamity</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 8</span><a href="#" className="chapter_name">Everything I Want</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 9</span><a href="#" className="chapter_name">Love & (Hair)piece</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 10</span><a href="#" className="chapter_name">Dreams and Desires and Stuff</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 11</span><a href="#" className="chapter_name">An Unfortunate Boy</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 12</span><a href="#" className="chapter_name">An Undaunted Girl</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 13</span><a href="#" className="chapter_name">The Exchange Diary</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 14</span><a href="#" className="chapter_name">An Odd Pair</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 15</span><a href="#" className="chapter_name">School Trip: The Day Before</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 16</span><a href="#" className="chapter_name">School Trip: Day 1</a><span className="chapter_update">2019/12/30 23:59:59</span>
					<span className="chapter_id">Chapter 17</span><a href="#" className="chapter_name">School Trip: Day 2</a><span className="chapter_update">2019/12/30 23:59:59</span>
				</div>
			</div>
		);
	}
}