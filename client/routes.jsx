import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '/imports/ui/App';
import Home from '/imports/ui/pages/Home.jsx';
import Viewer from '/imports/ui/pages/Viewer.jsx';
import Uploader from '/imports/ui/pages/Uploader.jsx';
import ComicAdd from '/imports/ui/pages/ComicAdd.jsx';

FlowRouter.route('/', {
	name: 'Home',
	action(){
		mount( App, {
			content: <Home />
		})
	}
})

FlowRouter.route('/about', {
	name: 'Viewer',
	action(){
		mount( App, {
			content: <Viewer />
		})
	}
})