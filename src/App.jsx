import React from 'react';

import './index.scss';

import Counter from './Counter.jsx';

const App = () => {
  return (
    <Counter 
      start={0}
      step={1} 
    />
  )
}

export default App;