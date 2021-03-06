import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
// export const Comics = new Mongo.Collection('comics');
export const Files = new Mongo.Collection('files');

// if (Meteor.isServer)
// {
// 	Meteor.publish('files', function filesPublication() {
// 		return Files.find();
// 	});
// }

const core = {
	async 'comics.add' (comic)
	{
		let comic_file_id = comic.name;
		let comic_file = core ["files.get"] (comic_file_id);
		if (!comic_file)
		{
			comic_file = {
				chapters: {}
			};
		}
		
		comic_file.author = comic.author;
		comic_file.genres = comic.genres;
		comic_file.tags = comic.tags;
		comic_file.introduction = comic.introduction;

		core ["files.set"] (comic_file_id, comic_file);
		console.log ("comics.add", "completed");
	},

	async 'comics.save' (comic_name, chapter_name, chapter_id, images)
	{
		// console.log ("comics.save", comic_name, chapter_name, chapter_id, images);
		
		let comic_file_id = comic_name;
		let comic_file = core ["files.get"] (comic_file_id);
		if (!comic_file)
		{
			console.log ("comics.save", "error", "cannot found " + comic_name);
			return;
		}

		let chapter_file_id = comic_file.chapters [chapter_id];
		let chapter_file = chapter_file_id ? core ["files.get"] (chapter_file_id) : undefined;
		if (!chapter_file)
		{
			chapter_file = {
				name: chapter_name
			,	images: {}
			}

			chapter_file_id = core ["files.add"] (chapter_file);
			comic_file.chapters [chapter_id] = chapter_file_id;
			
			// console.log ("comics.save", "create chapter_file", chapter_file_id);
		}

		chapter_file.name = chapter_name;

		for (let i in images)
		{
			let image = images [i];
			let url = image.url;
			
			console.log ("comics.save", "image", i, url);

			let image_file_id = chapter_file.images [i];
			let image_file = {
				content: url
			};

			if (image_file_id)
			{
				core ["files.set"] (image_file_id, image_file);
				
				// console.log ("comics.save", "update", i, image_file_id);
				continue;
			}

			image_file_id = core ["files.add"] (image_file);
			chapter_file.images [i] = image_file_id;
			
			// console.log ("comics.save", "add", i, image_file_id);
		}
		
		core ["files.set"] (comic_file_id, comic_file);
		// console.log ("comics.save", "update comic");

		core ["files.set"] (chapter_file_id, chapter_file);
		// console.log ("comics.save", "update chapter");

		console.log ("comics.save", "completed");
	},

	async 'comics.load' (comic_name, chapter_id)
	{
		console.log ("comics.load ", comic_name, chapter_id);

		let comic_file_id = comic_name;
		let comic_file = core ["files.get"] (comic_file_id);
		if (!comic_file)
		{
			console.log ("comic_file_id " + comic_file_id + " undefined", comic_file);
			return undefined;
		}

		let chapter_file_id = comic_file.chapters [chapter_id];
		if (!chapter_file_id)
		{
			console.log ("chapter_file_id " + chapter_file_id + " undefined");
			return undefined;
		}

		let chapter_file = core ["files.get"] (chapter_file_id);
		if (!chapter_file)
		{
			console.log ("chapter_file undefined");
			return undefined;
		}
		
		let name = chapter_file.name;

		let images = {};
		for (let i in chapter_file.images)
		{
			let image_file_id = chapter_file.images [i];
			let image_file = core ["files.get"] (image_file_id);
			
			// console.log ("comics.load", "image", image_file_id, image_file);
			if (!image_file)
				continue;

			images [i] = image_file.content;
		}

		console.log ("comics.load ", "completed");
		return {name, images};
	},

	'files.add'(object)
	{
		if (!object)
			return "";
		
		let content = JSON.stringify (object);
		return Files.insert ({
			content: content
		});
	},

	'files.set'(id, object)
	{
		check (id, String);
		if (!object)
			return "";

		let content = JSON.stringify (object);

		let old = Files.findOne({_id: id});
		if (old)
		{
			Files.update(id, {$set: {content}});
			return id;
		}
		
		return Files.insert ({
			_id: id,
			content: content
		});
	},

	'files.get'(id)
	{
		check (id, String);
		
		let file = Files.findOne({_id: id});
		if (!file)
			return undefined;

		let content = file.content;
		let object = JSON.parse (content);
		return object;
	},

	'files.remove'(id)
	{
		check (id, String);
		Files.remove(id);
	}
};

Meteor.methods(core);