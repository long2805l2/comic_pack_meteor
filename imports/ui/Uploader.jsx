import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Uploader extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	componentDidMount()
	{
		window.addEventListener('load', () =>
		{
			this.listFiles = [];
			this.listElements = document.createElement('ol');
			
			let previewElement = document.getElementById('image_preview');
			previewElement.appendChild(this.listElements);

			this.inputElement = document.getElementById('image_uploads');
			this.inputElement.addEventListener('change', this.updateImageDisplay.bind(this), false);

			this.uploader = document.getElementById('uploader');
			this.uploader.addEventListener('dragenter', this.handleDragEnter.bind(this), false);
			this.uploader.addEventListener('dragleave', this.handleDragLeave.bind(this), false);
			this.uploader.addEventListener('dragover', this.handleDragOver.bind(this), false);
			this.uploader.addEventListener('drop', this.handleFileSelect.bind(this), false);
		});
	}
	
	handleDragEnter (e)
	{
		e.stopPropagation();
		e.preventDefault();
		this.uploader.classList.add('dragover');

		// console.log ("handleDragEnter", e);
	}
	
	handleDragLeave (e)
	{
		e.stopPropagation();
		e.preventDefault();
		this.uploader.classList.remove('dragover');
		
		// console.log ("handleDragLeave", e);
	}
	
	handleDragOver (e)
	{
		e.stopPropagation();
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy';

		// console.log ("handleDragOver", e);
	}
	
	handleFileSelect (e)
	{
		e.stopPropagation();
		e.preventDefault();
		
		this.uploader.classList.remove('dragover');
		
		let files = e.dataTransfer.files; 
		for (let i = 0; i < files.length; i++)
		{
			let file = files [i];
			this.addFile (file);
		}
	}

	updateImageDisplay (e)
	{
		let curFiles = this.inputElement.files;
		for(var i = 0; i < curFiles.length; i++)
		{
			let file = curFiles[i];
			this.addFile (file);
		}
	}

	addFile (file)
	{
		let image = document.createElement('img');
		image.src = window.URL.createObjectURL(file);

		let para = document.createElement('p');
		para.textContent = file.name;

		let listItem = document.createElement('li');
		listItem.appendChild(image);
		listItem.appendChild(para);

		let img = new Image ();
		img.onload = () =>
		{
			var canvas = document.createElement('canvas');
			canvas.width = img.naturalWidth;
			canvas.height = img.naturalHeight;

			canvas.getContext('2d').drawImage(img, 0, 0);
			this.listFiles.push ({
				name: file.name,
				url: canvas.toDataURL('image/png')
			});
		};
		img.src = image.src;
		
		this.listElements.appendChild(listItem);
	}

	onSubmit (e)
	{
		const comic_name = ReactDOM.findDOMNode(this.refs.comic_name).value.trim();
		const comic_chapter = ReactDOM.findDOMNode(this.refs.comic_chapter).value.trim();

		this.listFiles.sort ((a, b) =>
		{
			if (a.name > b.name)	return 1;
			if (a.name < b.name)	return -1;
			return 0;
		})
		Meteor.call('comics.save', comic_name, comic_chapter, this.listFiles);
	}
	
	render() {
		return (
			<div id="uploader" className="uploader">
				<form className="form">
					<div className="property">
						<label htmlFor="comic_name">Comic Name</label>
						<input type="text" id="comic_name" ref="comic_name" placeholder="type comic name"/>
					</div>
					<div className="property">
						<label htmlFor="comic_chapter">Chapter</label>
						<input type="number" id="comic_chapter" ref="comic_chapter" placeholder="1"/>
					</div>
					<div className="property">
						<label>Images</label>
					</div>
					<div className="box">
						<label htmlFor="image_uploads">Click or Drag here</label>
						<input type="file" id="image_uploads" ref="image_uploads" accept=".jpg, .jpeg, .png" multiple/>
					</div>
					<div id="image_preview" className="preview">
						{/* <ol>
							<li><img src="/000.jpg"></img><span>000.jpg</span></li>
							<li><img src="/001.jpg"></img><span>001.jpg</span></li>
							<li><img src="/002.jpg"></img><span>002.jpg</span></li>
							<li><img src="/003.jpg"></img><span>003.jpg</span></li>
							<li><img src="/005.jpg"></img><span>005.jpg</span></li>
							<li><img src="/006.jpg"></img><span>006.jpg</span></li>
							<li><img src="/007.jpg"></img><span>007.jpg</span></li>
							<li><img src="/008.jpg"></img><span>008.jpg</span></li>
							<li><img src="/009.png"></img><span>009.jpg</span></li>
							<li><img src="/010.png"></img><span>010.jpg</span></li>
							<li><img src="/011.png"></img><span>011.jpg</span></li>
							<li><img src="/012.png"></img><span>012.jpg</span></li>
							<li><img src="/013.png"></img><span>013.jpg</span></li>
							<li><img src="/014.png"></img><span>014.jpg</span></li>
							<li><img src="/015.png"></img><span>015.jpg</span></li>
							<li><img src="/016.png"></img><span>016.jpg</span></li>
							<li><img src="/017.png"></img><span>017.jpg</span></li>
							<li><img src="/018.png"></img><span>018.jpg</span></li>
							<li><img src="/019.png"></img><span>019.jpg</span></li>
							<li><img src="/020.png"></img><span>020.jpg</span></li>
							<li><img src="/021.png"></img><span>021.jpg</span></li>
							<li><img src="/022.png"></img><span>022.jpg</span></li>
							<li><img src="/023.png"></img><span>023.jpg</span></li>
							<li><img src="/024.png"></img><span>024.jpg</span></li>
							<li><img src="/025.png"></img><span>025.jpg</span></li>
							<li><img src="/026.png"></img><span>026.jpg</span></li>
							<li><img src="/027.png"></img><span>027.jpg</span></li>
							<li><img src="/028.png"></img><span>028.jpg</span></li>
						</ol> */}
					</div>
					<div type="submit" className="submit" onClick={this.onSubmit.bind(this)}>Submit</div>
				</form>
			</div>
		);
	}
}