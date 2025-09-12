import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Simple Counter</p>
        <p>Count: {count}</p>
        <div>
          <button onClick={() => setCount(c => c + 1)}>Increment</button>
          <button onClick={() => setCount(0)} style={{ marginLeft: 8 }}>Reset</button>
        </div>
      </header>
    </div>
  );
}

export default App;
