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
	/**
	 home => show newest list comic
	 |-choose	=>	comic => show info and list chapter
					|-edit info			=>	comic add - edit mode
					|-choose chapter	=>	chapter viewer
					|-choose tag		=>	home - search by tag
					
	 |-search	=> update list comic
	 |-add new	=> comic add

	 */
	render()
	{
		return (
			<div className="comic">
				<div className="comic_profile">
					<div className="comic_thumb"><img src="/000.jpg"></img></div>
					<div className="comic_detail">
						<div className="comic_property">
							<b>Genres</b>
							<span className="tags">
								<a className="tag" href="#">Action</a>
								<a className="tag" href="#">Adventure</a>
								<a className="tag" href="#">Superhero</a>
							</span>
						</div>
						<div className="comic_property"><b>Publisher</b><span><a className="tag" href="#">DC Comics</a></span></div>
						<div className="comic_property"><b>Writer</b><span><a className="tag" href="#">Benjamin Percy</a></span></div>
						<div className="comic_property"><b>Artist</b><span><a className="tag" href="#">Jonboy Meyers</a></span></div>
						<div className="comic_property"><b>Publication</b><p>26 October 2016</p></div>
						<div className="comic_property"><b>Status</b><span><a className="tag" href="#">Ongoing</a></span></div>
						<div className="comic_property">
							<b>Summary</b>
							<p>
								“Damian Knows Best” part one! Now that Damian has “summoned” the Teen Titans, the tyrannical teen reveals his master plan! But a great evil from Damian’s past is lurking around the corner, ready to strike at the team’s newest leader and destroy the new Teen Titans before they even begin!
							</p>
						</div>
					</div>
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