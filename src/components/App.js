import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

const App = () => (
  <div id="app" className="flex-cont">
    <Display result="5" />
    <ButtonPanel />
  </div>
);

export default App;
