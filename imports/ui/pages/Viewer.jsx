import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class Viewer extends React.Component
{
	constructor(props)
	{
		super(props);
		console.log ("Viewer", props);
		this.comic_name = props.comic;//"Hourou Musuko"
		this.comic_chapter = props.chapter;//1
		this.comic_chapter_name = "on loading ...";
	}

	componentDidMount()
	{
		Meteor.call('comics.load', this.comic_name, this.comic_chapter,
		(error, result) =>
		{
			this.comic_chapter_name = "";

			if (error)
			{
				console.log ("error", error);
				return;
			}
			
			if (!result)
				return;

			this.comic_chapter_name = result.name;
			let chapter_name = document.getElementById("chapter_name");
			chapter_name.innerText = this.comic_chapter_name;
			
			this.listElements = document.getElementById("gallery");
			let images = result.images;
			for (let i in images)
			{
				let url = images [i];
				let li = document.createElement ("li");
				let img = document.createElement ("img");
				img.src = url;

				li.appendChild (img);
				this.listElements.appendChild (li);
			}
		});
	}

	componentWillUnmount()
	{
	}
	
	render() {
		return (
			<div className="viewer">
				<h1 className="title" id="chapter_name">{this.comic_chapter_name}</h1>
				<ul className="gallery" id="gallery">
						{/* <li><img src="/000.jpg"></img></li>
						<li><img src="/001.jpg"></img></li>
						<li><img src="/002.jpg"></img></li>
						<li><img src="/003.jpg"></img></li>
						<li><img src="/005.jpg"></img></li>
						<li><img src="/006.jpg"></img></li>
						<li><img src="/007.jpg"></img></li>
						<li><img src="/008.jpg"></img></li>
						<li><img src="/009.png"></img></li>
						<li><img src="/010.png"></img></li>
						<li><img src="/011.png"></img></li>
						<li><img src="/012.png"></img></li>
						<li><img src="/013.png"></img></li>
						<li><img src="/014.png"></img></li>
						<li><img src="/015.png"></img></li>
						<li><img src="/016.png"></img></li>
						<li><img src="/017.png"></img></li>
						<li><img src="/018.png"></img></li>
						<li><img src="/019.png"></img></li>
						<li><img src="/020.png"></img></li>
						<li><img src="/021.png"></img></li>
						<li><img src="/022.png"></img></li>
						<li><img src="/023.png"></img></li>
						<li><img src="/024.png"></img></li>
						<li><img src="/025.png"></img></li>
						<li><img src="/026.png"></img></li>
						<li><img src="/027.png"></img></li>
						<li><img src="/028.png"></img></li> */}
				</ul>
			</div>
		);
	}
}