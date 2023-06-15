import React from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterWithPreviousState from './components/HookCounterWithPreviousState';
import HookCounterWithObject from './components/HookCounterWithObject';
import HookCounterWithArray from './components/HookCounterWithArray';
import HookCounterUseEffect from './components/HookCounterUseEffect';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';

function App() {
  return (
    <div className="App">
      <IntervalHookCounter />
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterUseEffect /> */}
      {/* <HookCounterWithArray /> */}
      {/* <HookCounterWithObject /> */}
      {/* <HookCounterWithPreviousState /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter/> */}
    </div>
  );
}

export default App;
