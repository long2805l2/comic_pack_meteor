import React from 'react';
import Header from './pages/Header.jsx';
import Viewer from './pages/Viewer.jsx';
import Uploader from './pages/Uploader.jsx';

import { Files } from '../api/files.js';

const App = (props) => (
  <div>
    <Header/>
    {props.content}
  </div>
);

export default App;
