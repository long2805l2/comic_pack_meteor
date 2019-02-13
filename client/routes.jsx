import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '/imports/ui/App'
import Viewer from '/imports/ui/pages/Viewer.jsx';
import Uploader from '/imports/ui/pages/Uploader.jsx';

FlowRouter.route('/', {
	name: 'Uploader',
	action(){
		mount( App, {
			content: <Uploader />
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