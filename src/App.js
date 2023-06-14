import React from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterWithPreviousState from './components/HookCounterWithPreviousState';
import HookCounterWithObject from './components/HookCounterWithObject';
import HookCounterWithArray from './components/HookCounterWithArray';

function App() {
  return (
    <div className="App">
      <HookCounterWithArray />
      {/* <HookCounterWithObject /> */}
      {/* <HookCounterWithPreviousState /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter/> */}
    </div>
  );
}

export default App;
