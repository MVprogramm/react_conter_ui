import React from 'react';

import './index.scss';

import CounterUI from './CounterUI.jsx';

const App = () => {
  return (
    <CounterUI 
      start={0}
      step={1} 
    />
  )
}

export default App;