import React from 'react';
import Header from './Header.jsx';
import Viewer from './Viewer.jsx';
import Uploader from './Uploader.jsx';

import { Files } from '../api/files.js';

const App = () => (
  <div>
    <Header/>
    <Viewer/>
  </div>
);

export default App;
