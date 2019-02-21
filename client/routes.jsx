import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '/imports/ui/App';
import Home from '/imports/ui/pages/Home.jsx';
import Viewer from '/imports/ui/pages/Viewer.jsx';
import Uploader from '/imports/ui/pages/Uploader.jsx';
import Comic from '/imports/ui/pages/Comic.jsx';
import ComicAdd from '/imports/ui/pages/ComicAdd.jsx';

FlowRouter.route('/', {
	name: 'Home',
	action(params, queryParams){
		mount( App, {
			content: <Home />
		})
	}
});

FlowRouter.route('/comic/add', {
	name: 'comic.add',
	action(params, queryParams){
		mount( App, {
			content: <ComicAdd />
		})
	}
});

FlowRouter.route('/comic/:comic_id', {
	name: 'comic.info',
	action(params, queryParams){
		console.log("comic.info", params, queryParams);
		mount( App, {
			content: <Comic />
		})
	}
});

FlowRouter.route('/comic/:comic_id/:comic_chapter_id', {
	name: 'comic.viewer',
	action(params, queryParams){
		console.log("comic.viewer", params, queryParams);
		mount( App, {
			content: <Viewer />
		})
	}
});