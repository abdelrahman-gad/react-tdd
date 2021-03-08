import './App.css';
import { useState } from 'react';

function App() {
  const [count , setCount ] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
    
        
       <h1>Counter App </h1>
       <div id="counter-value">{count}</div>
       <button id="increment-btn" onClick={ ()=> setCount( count + 1 ) } >Increment</button>
       <button id="decrement-btn" onClick={ ()=> setCount( count - 1 ) }>Decrement</button>
       
      </header>
    </div>
  );
}

export default App;
