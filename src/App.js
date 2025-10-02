import { useState } from 'react';
import './App.css';
import Calculator from './pages/calculator';
import Counter from './pages/counter';
import Dayone from './pages/dayone';

function App() {
  const [color ,setcolor] = useState("");

  return (
    <div className="App"
      style={{
        backgroundColor: color,
      }} >
      <div>
        {color}
        <input type='color' onChange={(e) => { setcolor(e.target.value)}} />
      </div>
      <Calculator />
      <Dayone />
      <Counter />
    </div>
  );
}

export default App;
