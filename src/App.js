import { useState } from 'react';
import './App.css';
import Calculator from './pages/calculator';
import Counter from './pages/counter';
import Dayone from './pages/dayone';
import Todo from './pages/todo';
import Convertor from './pages/convertor';
import Movies from './pages/movies';
import Birthday from './pages/birthday';
import Accordion from './pages/Accordion';
import Search from './pages/Search';

function App() {
  const [color ,setcolor] = useState("");

  const collection  = [
    {
      Movies : "Inception",
      rating : "8.8",
      image : "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
    },
    {
      Movies : "Interstellar",
      rating : "8.6",
      image : "https://upload.wikimedia.org/wikipedia/en/3/39/Interstellar_film_poster.jpg"
    },
    {
      Movies : "The Dark Knight",
      rating : "9.0",
      image : "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Dark_Knight_%282008_film%29_poster.jpg"
    }
  ];

  return (
    <div className="App"
      style={{
        backgroundColor: color,
      }} >
      <div>
        {color}
        <input type='color' onChange={(e) => { setcolor(e.target.value)}} />
      </div>
      <Search />
      <Accordion />
      <Birthday />
      {collection.map((item, index) => (
        <Movies key={index} {...item} />
      ))}
      <Convertor />
      <Todo />
      <Calculator />
      <Dayone />
      <Counter />
    </div>
  );
}

export default App;
