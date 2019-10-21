import React from 'react';
import './App.css';
import CounterGroup from './components/CounterGroup';

function App() {
  return (
    <div className="App">
      <CounterGroup defaultCount={3}/>
    </div>
  );
}

export default App;
