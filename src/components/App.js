import React from 'react';
import { Display } from './Display';
import { ButtonPanel } from './ButtonPanel';

export const App = () => {
    return (
      <div id='app'>
        <Display result=''/>
        <ButtonPanel />
      </div>
    );
}